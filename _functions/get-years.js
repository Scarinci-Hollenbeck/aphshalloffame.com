require('dotenv').config();
const { MongoClient } = require('mongodb');

exports.handler = async () => {
  try {
    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.db(process.env.DB_NAME);
    const years = await db.collection('years');
    const response = await years.find({}).sort({ year: -1 }).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: response,
        satus: 200,
        msg: "Here's the list of years!",
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    };
  }
};
