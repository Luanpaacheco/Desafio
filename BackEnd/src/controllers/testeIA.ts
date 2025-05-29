import { Request, Response } from "express";
import { testeIA } from '../services/testIA';

class testeIAcontroller {
    async handle(req: Request, res: Response) {
        // Pega do body e não do params
        const { message } = req.body;

        const teste = new testeIA();
        const resposta = await teste.execute({ message});
        console.log(resposta)
        res.send(resposta);
    }
}

export { testeIAcontroller };
