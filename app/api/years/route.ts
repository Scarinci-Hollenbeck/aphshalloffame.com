import prisma from '../../../utils/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = await prisma.years.findMany()

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
