import prisma from '../../../utils/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const req = await request.json()
    const data = await prisma.aphs_member.findMany({
      where: {
        inducted: req?.currentYear,
      },
    })

    console.log('data', data)

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
