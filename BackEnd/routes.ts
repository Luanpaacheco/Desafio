import { Router, Request, Response } from 'express';
import {loginController} from "./src/controllers/login"
import authMiddleware from './src/middlewares/authMiddleware';
import { getMessagesController } from './src/controllers/getMessages';
import {CreateMessage} from "./src/controllers/messages"
const router = Router();


router.post('/login', (req: Request, res: Response) => {
    return new loginController().handle(req,res)
});


router.get('/chat', authMiddleware, (req: Request, res: Response) => {
    return new getMessagesController().handle(req, res);
   
});

router.post('/message', authMiddleware, (req: Request, res: Response) => {
   new CreateMessage().handle(req, res);
   console.log("foi")
});

export const routes = router;
