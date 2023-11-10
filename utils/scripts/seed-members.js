const p = require('@prisma/client')
const members = require('../db/members.json')

const prisma = new p.PrismaClient()

async function main() {
  await prisma.member.createMany({
    data: members,
    skipDuplicates: true, // Skip 'Bobo'
  })

  console.log(members.length)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
