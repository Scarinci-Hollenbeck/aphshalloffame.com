import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const currentYear: string = JSON.parse(req.body)

      const data = await prisma.member.findMany({
        where: {
          inducted: currentYear.toString(),
        },
      })

      res.status(200).json({ data })
    }
  } catch (error) {
    console.error(error)

    res.status(500).json({ error: 'Internal Server Error' })
  } finally {
    await prisma.$disconnect()
  }
}
