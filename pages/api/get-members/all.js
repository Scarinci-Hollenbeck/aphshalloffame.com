import dbConnect from 'utils/db-connect';
import Members from 'models/Members';

export default async function getCeremony(req, res) {
  if (req.method === 'GET') {
    await dbConnect();
    try {
      const members = await Members.find({}).sort({ inducted: 'DESC' }).exec();

      if (members.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No members were found',
          data: members,
        });
      }

      const membersName = members.map((m) => m.name);

      return res.status(200).json({
        status: 200,
        message: 'Here are all the names of all the members',
        data: membersName,
      });
    } catch (error) {
      return res.status(error.status || 500).end(error.message);
    }
  }

  return false;
}
