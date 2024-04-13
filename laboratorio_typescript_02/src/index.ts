import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { engine } from "express-handlebars";
import { Classe } from "./types/turma";
import { Aluno } from "./types/aluno";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.get("/", async (req: Request, res: Response) => {
  try {
    const response = await fetch(`${process.env.URL_DB}/alunos`);
    const alunos: Aluno[] = await response.json();

    let turma: Classe = new Classe(14, "01");
    turma.alunos = alunos;

    const qtdAlunos: number = turma.getNumAlunos();
    const mediaIdades: number = turma.getMediaIdades();
    const mediaAlturas: number = turma.getMediaAlturas();
    const mediaPesos: number = turma.getMediaPesos();
    res.render("index", {
      turma,
      qtdAlunos,
      mediaIdades,
      mediaAlturas,
      mediaPesos,
      layout: false,
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/create", async (req: Request, res: Response) => {
  res.render("create", { layout: false });
});

app.post("/create", async (req: Request, res: Response) => {
  let aluno: Aluno = req.body;

  try {
    await fetch(`${process.env.URL_DB}/alunos`, {
      method: "POST",
      body: JSON.stringify(aluno),
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.get("/update/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const response = await fetch(`${process.env.URL_DB}/alunos/${id}`);
    const aluno: Aluno = await response.json();

    res.render("update", { aluno, layout: false });
  } catch (err) {
    console.log(err);
  }
});

app.post("/update/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const aluno: Aluno = req.body;
  try {
    await fetch(`${process.env.URL_DB}/alunos/${id}`, {
      method: "PUT",
      body: JSON.stringify(aluno),
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.get("/remove/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await fetch(`${process.env.URL_DB}/alunos/${id}`, {
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
