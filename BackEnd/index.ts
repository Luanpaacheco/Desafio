import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'luan',
      email: 'cleiton@taurus.com',
      password:"password1"
    },
  })

  const allUsers = await prisma.user.findMany({
  })
  console.dir(allUsers, { depth: null })
}
main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
})