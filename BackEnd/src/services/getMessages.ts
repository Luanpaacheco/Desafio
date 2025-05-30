

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export class getMessages {
    async execute( userId: string) {
        if (!userId) {
            throw new Error("userId vazio");
        }

        const Messages = await prisma.message.findMany({
            where:{
                userId
            },
            orderBy: {
                createdAt: 'desc',
            }
        })



        return Messages;

}
}
