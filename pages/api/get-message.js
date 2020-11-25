import dbConnect from '../../utils/db-connect';
import Message from '../../models/Message';

export default async function getMessage(req, res) {
  if (req.method === 'GET') {
    await dbConnect();
    try {
      const message = await Message.find({});

      if (message.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No message was found',
          data: [],
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Here's the latest message!",
        data: message,
      });
    } catch (error) {
      return res.status(error.status || 500).end(error.message);
    }
  }

  return false;
}
