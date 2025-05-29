import { PrismaClient } from "@prisma/client";
import {  generateToken } from "../middlewares/generateToken";

const prisma = new PrismaClient();

interface GetUserProps {
    message: string;
}

class testeIA {
    async execute({ message }: GetUserProps) {
        if (!message) {
            throw new Error("message vazio");
        }



        return {response:"possivel resposta da IA"};

    }
}

export { testeIA };