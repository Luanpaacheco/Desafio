import { Request, Response } from "express";
import { login } from '../services/login';

class loginController {
    async handle(req: Request, res: Response) {
        // Pega do body e não do params
        const { email, password } = req.body;

        const getByService = new login();
        const token = await getByService.execute({ email, password });

        res.send({"token":token});
    }
}

export { loginController };
