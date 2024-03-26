import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import envalidEnv from './utils/envalidEnv';
import logger from './middlewares/logger';
import router from './router/router';

dotenv.config();
envalidEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(logger("completo"));

app.use("/html", express.static(`${__dirname}/../public/html`));
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/js", express.static(`${__dirname}/../public/js`));
app.use("/img", express.static(`${__dirname}/../public/img`));


app.use(router);

app.use((req, res) =>{
  res.status(404).send("Erro 404!");
})

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
