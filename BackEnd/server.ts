import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './routes'; // ou './src/routes' dependendo da estrutura

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/', routes);
app.use('/login', routes)
app.use('/chat', routes)

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Express rodando em http://localhost:${PORT}`);
});
