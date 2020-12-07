import dbConnect from 'utils/db-connect';
import Members from 'models/Members';

export default async function getMember(req, res) {
  if (req.method === 'GET') {
    await dbConnect();
    try {
      const { name } = req.query;
      const member = await Members.find({ name });

      if (member.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No members were found',
          data: member,
        });
      }

      return res.status(200).json({
        status: 200,
        message: `Here is all the info on the member ${name}`,
        data: member[0]
      });
    } catch (error) {
      return res.status(error.status || 500).end(error.message);
    }
  }

  return false;
}
