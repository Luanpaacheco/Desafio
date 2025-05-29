import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()

class generateToken{
    async execute(id: string, email:string){
        const secret = process.env.JWT_SECRET;

        if (!secret) {
            throw new Error("erro no secret no env");
        }
        const generateToke =  jwt.sign({id:id,email:email}, secret,{expiresIn:"24h"} )
        return generateToke;
    }
}

export {generateToken};