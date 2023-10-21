import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../utils/prisma'
import { NextResponse } from 'next/server'
const KEEP_ON_INT = 199

export async function GET() {
  try {
    let data = await prisma.keepAwake.create({
      data: {
        keepOn: KEEP_ON_INT,
      },
    })

    return NextResponse.json(data, {
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(error, {
      status: 500,
    })
  } finally {
    await prisma.$disconnect()
  }
}
