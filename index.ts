import express, { Request, Response, Router } from 'express';
import route from "./src/routers/obras.routes"
const app = express();
app.use(express.json());
const port = 3456;

app.get('/', (req, res) => {
  res.status(200).json("Aplicacao rodando")
})
app.use("/", route)

app.listen(port);
console.log(`Aplicacao rodando em: http://localhost:${port}`)

