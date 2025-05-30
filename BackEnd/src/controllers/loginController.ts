import { Request, Response } from "express";
import { login } from '../services/loginServices';

class loginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const getByService = new login();
        const token = await getByService.execute({ email, password });

        res.send({"token":token});
    }
}

export { loginController };
