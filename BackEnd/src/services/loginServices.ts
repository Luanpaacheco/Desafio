import { PrismaClient } from "@prisma/client";
import  Jwt  from "jsonwebtoken";
import {  generateToken } from "../middlewares/generateToken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "undefined";

interface GetUserProps {
    email: string;
    password: string;
}

class login {
    async execute({ email, password }: GetUserProps) {
        if (!email) {
            throw new Error("email is required");
        }
        
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        if (user.password !== password) {
            throw new Error("Senha incorreta");
        }

        const generateByID = new generateToken();
        const token = await generateByID.execute(user.id, user.email);


        return token;

    }
}

export { login };