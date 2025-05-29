import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
    };
  }
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(403).json({ message: "Acesso negado" });
        return; 
    }

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT secret is not defined in environment variables");
        }

        const decoded = jwt.verify(token, secret) as { email: string; id: string };
        
        const user = await prisma.user.findUnique({
            where: {
                email: decoded.email,
            }
        });
        if (!user) {
            res.status(403).json({ message: "usuario nao encontrado" });
            return; 
        }
        req.user = { id: decoded.id };
        

        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
        return; 
    }
};

export default authMiddleware;
