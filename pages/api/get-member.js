import dbConnect from '../../utils/db-connect'
import Members from '../../models/Members'

export default async function getMemberById(req, res) {
  if (req.method === 'GET') {
    await dbConnect()
    try {
      const requestId = JSON.parse(req.body)

      const member = await Members.findById({ requestId })

      if (member.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No member was found',
          data: [],
        })
      }

      return res.status(200).json({
        status: 200,
        message: `Here's data on the member with the id: ${requestId}`,
        data: member,
      })
    } catch (error) {
      return res.status(error.status || 500).end(error.message)
    }
  }

  return false
}
