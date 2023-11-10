const p = require('@prisma/client')
const members = require('../../db/members.json')

const prisma = new p.PrismaClient()

async function main() {
  const membersRequest = await prisma.$queryRaw`
    Select slug, biography FROM Member WHERE LENGTH(biography) = 2000;
  `

  membersRequest.forEach((mr) => {
    const mrSlug = mr.slug

    members.forEach(async (m) => {
      const mSlug = m.slug

      if (mrSlug === mSlug) {
        await prisma.member.update({
          where: { slug: mrSlug },
          data: {
            biography: m.biography,
          },
        })
      }
    })
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
