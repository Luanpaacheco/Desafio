import { Request, Response } from "express";
import { getMessages } from '../services/getMessagesServices';

class getMessagesController {
    async handle(req: Request, res: Response): Promise<void>  {
        const userId = req.user?.id;
        if (!userId) {
             res.status(401).json({ message: "Usuário não autenticado" });
             return;
        }

        const getMessagesService = new getMessages();
        const resposta = await getMessagesService.execute(userId);
        res.send(resposta);
    }
}

export { getMessagesController };
