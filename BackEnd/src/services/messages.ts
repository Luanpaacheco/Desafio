import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export class messagesService {
    async execute(text: string, isUser: boolean, userId: string) {
    const message = await prisma.message.create({
      data: {
        text,
        isUser,
        userId,
      },
    });

    return message;

}
}
