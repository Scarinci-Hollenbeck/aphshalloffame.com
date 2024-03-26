import years from 'db/years.json'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const data = years

    return NextResponse.json(data, {
      status: 200,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(error, {
      status: 500,
    })
  }
}
