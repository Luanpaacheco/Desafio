import { Request, Response } from "express";
import { getMessages } from '../services/getMessages';

class getMessagesController {
    async handle(req: Request, res: Response): Promise<void>  {
        // Pega do body e não do params
        const userId = req.user?.id;
        if (!userId) {
             res.status(401).json({ message: "Usuário não autenticado" });
             return;
        }

        const getMessagesService = new getMessages();
        const resposta = await getMessagesService.execute(userId);
        console.log(resposta)
        res.send(resposta);
    }
}

export { getMessagesController };
