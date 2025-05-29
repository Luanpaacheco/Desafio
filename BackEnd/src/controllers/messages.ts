import { Request, Response } from "express";
import { messagesService } from "../services/messages";


class CreateMessage {
    async handle(req: Request, res: Response) {
    const { text, isUser }: { text: string; isUser: boolean } = req.body;
    const userId = req.user?.id;
    if (!userId) {
        return res.status(401).json({ message: "Usuário não autenticado" });
    }

    const createMessage = new messagesService();
    const message = await createMessage.execute(text, isUser, userId);
    return res.status(201).json(message);
    }
}

export { CreateMessage };
