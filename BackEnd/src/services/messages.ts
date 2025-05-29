import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface GetUserProps {
    text: string;
    isUser: boolean;
    userId:string;
}

class messages {
    async execute({ text, isUser, userId }: GetUserProps) {
        
        return await prisma.message.create({
            data:{
                text,isUser,userId
            }
        });



    }
}

export { messages };