import express, { Request, Response } from 'express';
import routes from './routes'

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Word!');
});

app.use(routes)
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});