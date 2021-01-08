require('dotenv').config();
const { MongoClient } = require('mongodb');

exports.handler = async (event) => {
  try {
    const path = event.path.replace(/\/\.netlify\/functions\/[^/]*\//, '');
    const pathParts = (path) ? path.split('/') : [];
    const year = pathParts[0];

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = connection.db(process.env.DB_NAME);
    const members = await db.collection('members');

    if (year === 'all') {
      const response = await members.find({}).sort({ inducted: -1, lastName: 1 }).toArray();

      return {
        statusCode: 200,
        body: JSON.stringify({
          year,
          data: response,
          satus: 200,
          msg: 'Here are all the members from the year',
        }),
      };
    }

    if (!year) {
      const response = await members.find({}).sort({ inducted: -1, lastName: 1 }).toArray();

      return {
        statusCode: 200,
        body: JSON.stringify({
          year,
          data: response,
          satus: 200,
          msg: 'Here are all the members from the year',
        }),
      };
    }

    const response = await members.find({ inducted: year }).sort({ inducted: -1, lastName: 1 }).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify({
        year,
        data: response,
        satus: 200,
        msg: `Here are all the members from ${year}`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: `Something went wrong! ${error}` }),
    };
  }
  // if (req.method === 'GET') {
  //   await dbConnect();
  //   try {
  //     let members;
  //     const { year } = req.query;

  //     if (members.length < 0) {
  //       return res.status(404).json({
  //         status: 404,
  //         message: 'There was an error! No members were found',
  //         data: [],
  //       });
  //     }

  //     return res.status(200).json({
  //       status: 200,
  //       message: `Here are all the members from the year ${year}`,
  //       data: members,
  //     });
  //   } catch (error) {
  //     return res.status(error.status || 500).end(error.message);
  //   }
  // }

  // return false;
};
