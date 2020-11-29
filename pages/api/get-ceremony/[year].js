import dbConnect from 'utils/db-connect';
import Ceremony from 'models/Ceremony';

export default async function getCeremony(req, res) {
  if (req.method === 'GET') {
    await dbConnect();
    try {
      const { year } = req.query;
      const ceremony = await Ceremony.find({ ceremony: year });

      if (ceremony.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No ceremony photos were found',
          data: [],
        });
      }

      return res.status(200).json({
        status: 200,
        message: `Here are all the photos from the ${year} ceremony`,
        data: ceremony,
      });
    } catch (error) {
      return res.status(error.status || 500).end(error.message);
    }
  }

  return false;
}
