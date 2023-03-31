import { NextResponse } from 'next/server'
import prisma from '../../../prisma'

export async function POST(request: Request) {
  try {
    const res = await request.json()

    const data = await prisma.member.findMany({
      where: {
        inducted: res,
      },
    })

    return new Response(JSON.stringify(data), {
      status: 200,
    })
  } catch (error) {
    console.error(error)

    return new Response(JSON.stringify(error), {
      status: 500,
    })
  } finally {
    await prisma.$disconnect()
  }
}
