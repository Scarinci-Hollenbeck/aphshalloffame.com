import prisma from '../../../prisma'

const KEEP_ON_INT = 199

export async function GET() {
  try {
    let data = await prisma.keepAwake.create({
      data: {
        keepOn: KEEP_ON_INT,
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
    const getKeepAwakeRecord = await prisma.keepAwake.findFirst({
      where: {
        keepOn: KEEP_ON_INT,
      },
    })
    await prisma.keepAwake.delete({
      where: {
        id: getKeepAwakeRecord?.id,
      },
    })
    await prisma.$disconnect()
  }
}
