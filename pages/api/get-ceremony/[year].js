import dbConnect from 'utils/db-connect';
import Ceremonies from 'models/Ceremonies';

export default async function getCeremony(req, res) {
  if (req.method === 'GET') {
    await dbConnect();
    try {
      const { year } = req.query;
      const ceremonies = await Ceremonies.find({ ceremony: year });

      if (ceremonies.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No ceremonies were found',
          data: ceremonies,
        });
      }

      return res.status(200).json({
        status: 200,
        message: `Here are all the photos from the ${year} ceremony`,
        data: ceremonies,
      });
    } catch (error) {
      return res.status(error.status || 500).end(error.message);
    }
  }

  return false;
}
