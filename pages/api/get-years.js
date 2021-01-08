import dbConnect from 'utils/db-connect';
import Years from 'models/Years';

export default async function getYears(req, res) {
  if (req.method === 'GET') {
    await dbConnect();
    try {
      const years = await Years.find({});

      if (years.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No years were found',
          data: [],
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Here's the list of years!",
        data: years,
      });
    } catch (error) {
      return res.status(error.status || 500).end(error.message);
    }
  }

  return false;
}