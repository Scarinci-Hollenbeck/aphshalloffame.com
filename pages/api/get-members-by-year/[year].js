/* eslint-disable import/no-anonymous-default-export */
require('dotenv').config()
const { MongoClient } = require('mongodb')

const getMembersByYear = async (year) => {
  const connection = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = connection.db(process.env.DB_NAME)
  const members = await db.collection('members')

  if (year === 'all') {
    const response = await members
      .find({})
      .sort({ inducted: -1, lastName: 1 })
      .toArray()
      
    connection.close()
    return {
      statusCode: 200,
      response,
    }
  }

  if (!year) {
    const response = await members
      .find({})
      .sort({ inducted: -1, lastName: 1 })
      .toArray()

    connection.close()
    return {
      statusCode: 200,
      response,
    }
  }

  if (year) {
    const response = await members
      .find({ inducted: year })
      .sort({ inducted: -1, lastName: 1 })
      .toArray()

    connection.close()
    return {
      statusCode: 200,
      response,
    }
  }

  connection.close()
  return {
    statusCode: 404,
    response: [],
  }
}

export default async (req, res) => {
  try {
    const { year } = req.query
    const records = await getMembersByYear(year)

    if (records.statusCode === 404) {
      return res.status(404).send({ ...records })
    }

    return res.status(200).send({ ...records })
  } catch (error) {
    console.error(error)

    return res.status(500).json({ error })
  }
}
