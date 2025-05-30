import { Router, Request, Response } from 'express';
import {loginController} from "./src/controllers/loginController"
import authMiddleware from './src/middlewares/authMiddleware';
import { getMessagesController } from './src/controllers/getMessagesController';
import {CreateMessage} from "./src/controllers/createMessagesController"
const router = Router();


router.post('/login', (req: Request, res: Response) => {
    return new loginController().handle(req,res)
});


router.get('/chat', authMiddleware, (req: Request, res: Response) => {
    return new getMessagesController().handle(req, res);
   
});

router.post('/message', authMiddleware, (req: Request, res: Response) => {
   new CreateMessage().handle(req, res);
});

export const routes = router;
