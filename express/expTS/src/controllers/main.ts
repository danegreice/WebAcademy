import { Request, Response } from "express";
import createParagrafos from "../utils/paragrafos";

const index = (req: Request, res: Response) => {
    res.send("hello world");
}

const bemvindo = (req: Request, res: Response) => {
    const nome = req.params.nome;
    res.send(`Seja bem vindo ${nome}`);
}

const lorem = (req: Request, res: Response) => {
    const qtd = req.params.qtd;
    res.send(createParagrafos(parseInt(qtd)));
}

const hb1 = (req: Request, res: Response) => {
    res.render("main/hb1", {
        mensagem: "Testando o handlebars",
    });
};

const hb2 = (req: Request, res: Response) => {
    res.render("main/hb2", {
        poweredByNodejs: true,
        name: "Express",
        type: "Framework",
    });
};

const hb3 = (req: Request, res: Response) => {
    const profes = [
        {nome: 'David Fernandes', sala: 1238},
        {nome: 'Horácio Fernandes', sala: 1233},
        {nome: 'Edleno Moura', sala: 1236},
        {nome: 'Tayana Conte', sala: 1231}
    ]
    res.render("main/hb3", {
        profes,
    });
};


const hb4 = (req: Request, res: Response) => {
    const technologies = [
        { nome: 'Express', type: 'Framework', poweredByNodejs: true },
        { nome: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { nome: 'React', type: 'Library', poweredByNodejs: true },
        { nome: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { nome: 'Django', type: 'Framework', poweredByNodejs: false },
        { nome: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { nome: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
        ];
    res.render('main/hb4', { technologies });
}

export default {hb1, hb2, hb3, index, hb4, bemvindo, lorem};