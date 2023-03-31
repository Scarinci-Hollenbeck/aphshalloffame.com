import prisma from '../../../prisma'

export async function GET() {
  try {
    const data = await prisma.years.findMany()

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
