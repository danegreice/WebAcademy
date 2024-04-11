import express, {Request, Response} from "express";
import {engine} from "express-handlebars";
import dotenv from "dotenv";
import {lembrete, lembreteUpdate} from "./types/lembrete";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.get("/", async (req: Request, res: Response) => {
    try {
        const response = await fetch(`${process.env.URL_DB}/lembretes`);
        const lembretes: lembrete[] = await response.json();
    
        res.render("index", {lembretes, layout: false});
    } catch(err) {
        console.log(err);
    }

})

app.get("/create", async (req: Request, res: Response) => {
    res.render("create", {layout: false})
})

app.post("/create", async (req: Request, res: Response) => {
    let lembreteBody: lembrete = req.body;

    try {
        await fetch(`${process.env.URL_DB}/lembretes`, {
            method: "POST",
            body: JSON.stringify(lembreteBody)
        })
        res.redirect("/");
    }catch(err){
        console.log(err);
    }
    
})

app.get("/update/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const response = await fetch(`${process.env.URL_DB}/lembretes/${id}`);
        const lembrete: lembrete = await response.json();

        console.log(lembrete);
        res.render("update", {lembrete, layout: false})
    } catch(err) {
        console.log(err);
    }

})

app.post("/update/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    const lembreteAtualizado: lembreteUpdate = req.body;
    try {
        await fetch(`${process.env.URL_DB}/lembretes/${id}`, {
            method: 'PUT',
            body: JSON.stringify(lembreteAtualizado)});
        res.redirect("/");
    }catch(err) {
        console.log(err);
    }
})

app.get("/remove/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        await fetch(`${process.env.URL_DB}/lembretes/${id}`, {
            method: 'DELETE'
        });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})
