import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { engine } from "express-handlebars";
import { CarrinhoCompras } from "./views/types/carrinho";
import { TV } from "./views/types/tv";
import { Celular } from "./views/types/celular";
import { Bicicleta } from "./views/types/bicicleta";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine(
  "handlebars",
  engine({
    layoutsDir: `${__dirname}/views/layouts`,
  })
);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.get("/", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${process.env.URL_DB}/produtos`);
    const produtos: (TV | Celular | Bicicleta)[] = await response.json();
    let total: number = 0;
    produtos.forEach((p) => {
      total += parseInt(p.valor);
    });
    res.render("main/index", { produtos, total, layout: "main" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/tv/create", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${process.env.URL_DB}/produtos`);
    const produtos: (TV | Celular | Bicicleta)[] = await response.json();
    let total: number = 0;
    produtos.forEach((p) => {
      total += parseInt(p.valor);
    });
    res.render("main/createTv", { produtos, total, layout: "main" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/celular/create", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${process.env.URL_DB}/produtos`);
    const produtos: (TV | Celular | Bicicleta)[] = await response.json();
    let total: number = 0;
    produtos.forEach((p) => {
      total += parseInt(p.valor);
    });
    res.render("main/createCelular", { produtos, total, layout: "main" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/bicicleta/create", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${process.env.URL_DB}/produtos`);
    const produtos: (TV | Celular | Bicicleta)[] = await response.json();
    let total: number = 0;
    produtos.forEach((p) => {
      total += parseInt(p.valor);
    });
    res.render("main/createBicicleta", { produtos, total, layout: "main" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/create", async (req: Request, res: Response) => {
  let produto: (TV | Celular | Bicicleta)[] = req.body;
  try {
    await fetch(`${process.env.URL_DB}/produtos`, {
      method: "POST",
      body: JSON.stringify(produto),
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.get("/remove/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await fetch(`${process.env.URL_DB}/produtos/${id}`, {
      method: "DELETE",
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
