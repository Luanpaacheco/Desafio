import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'luan',
      email: 'teste@tauro.com',
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