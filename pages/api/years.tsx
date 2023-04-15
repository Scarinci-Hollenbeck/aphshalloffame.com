import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.years.findMany()

      return res.status(200).json(data)
    } catch (error) {
      console.error(error)
      return res.status(500).json(JSON.stringify(error))
    } finally {
      await prisma.$disconnect()
    }
  }
}
