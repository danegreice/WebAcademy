import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateProdutoDto } from "../produto/produto.types";
import { existeProduto, getProduto } from "./compra.service";

const index = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Lista os produtos do carrinho.'
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Produtos' }
 }
 */
  try {
    const itens = req.session.carrinho!;
    res.status(StatusCodes.OK).json(itens);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const create = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Adicionar um produto ao carrinho.'
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/ProdutoCarrinho' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Produto' }
 }
 */
  const produto = req.body as CreateProdutoDto;
  try {
    if (await existeProduto(produto.nome)) {
      const novoProduto = await getProduto(produto.nome);
      req.session.carrinho!.push(novoProduto);
      res.status(StatusCodes.OK).json(novoProduto);
    } else {
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  /*
 #swagger.summary = 'Remove um produto do carrinho.'
 #swagger.parameters['id'] = {
 in: 'id',
 schema: { $ref: '#/definitions/id' }
 }
 #swagger.responses[204]
 */
  try {
    const produtoIndex = req.session.carrinho!.findIndex(
      (produto) => produto.id === id
    );
    req.session.carrinho!.splice(produtoIndex, 1);
    res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, remove };
