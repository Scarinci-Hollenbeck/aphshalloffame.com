import dbConnect from 'utils/db-connect'
import Members from 'models/Members'

export default async function getMembers(req, res) {
  if (req.method === 'GET') {
    await dbConnect()
    try {
      let members
      const year = req.query.year

      if (year === 'all') {
        members = await Members.find({})
      }

      if (members.length < 0) {
        return res.status(404).json({
          status: 404,
          message: 'There was an error! No members were found',
          data: [],
        })
      }

      return res.status(200).json({
        status: 200,
        message: 'Here are all the members',
        data: members,
      })
    } catch (error) {
      return res.status(error.status || 500).end(error.message)
    }
  }

  return false
}
