import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      const { currentYear } = req.body
      const data = await prisma.member.findMany({
        where: {
          inducted: currentYear,
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
