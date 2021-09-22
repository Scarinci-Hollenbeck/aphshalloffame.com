require('dotenv').config();
const { MongoClient } = require('mongodb');

const getYears = async () => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = connection.db(process.env.DB_NAME);
  const years = await db.collection('years');
  const response = await years.find({}).sort({ year: -1 }).toArray();

  return {
    statusCode: 200,
    response,
  };
};

export default async (req, res) => {
  try {
    const years = await getYears();

    return res.status(200).send({ ...years });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};
