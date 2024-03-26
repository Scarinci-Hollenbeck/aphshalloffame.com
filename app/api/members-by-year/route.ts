import members from 'db/members.json'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const req = await request.json()

    const data = members.filter(
      (member) => member.inducted === req?.currentYear,
    )

    if (data.length > 0) {
      return NextResponse.json(data, {
        status: 200,
      })
    }
  } catch (error) {
    console.error(error)

    return NextResponse.json(error, {
      status: 500,
    })
  }
}
