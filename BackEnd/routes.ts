import { Router, Request, Response } from 'express';
import {loginController} from "./src/controllers/login"
import authMiddleware from './src/middlewares/authMiddleware';
import { testeIAcontroller } from './src/controllers/testeIA';
import {CreateMessage} from "./src/controllers/messages"
const router = Router();


router.post('/login', (req: Request, res: Response) => {
    return new loginController().handle(req,res)
});


router.get('/chat', authMiddleware, (req: Request, res: Response) => {
   res.json({ message: 'Você está autenticado e pode acessar o chat!' });
});

router.post('/chat', authMiddleware, (req: Request, res: Response) => {
   return new testeIAcontroller().handle(req, res);
});

router.post('/message', authMiddleware, (req: Request, res: Response) => {
   new CreateMessage().handle(req, res);
   console.log("foi")
});

export const routes = router;
