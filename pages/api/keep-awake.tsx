import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../utils/prisma'

const KEEP_ON_INT = 199

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      let data = await prisma.keepAwake.create({
        data: {
          keepOn: KEEP_ON_INT,
        },
      })

      return res.status(200).json(data)
    } catch (error) {
      console.error(error)
      return res.status(500).json(JSON.stringify(error))
    } finally {
      await prisma.$disconnect()
    }
  }
}
