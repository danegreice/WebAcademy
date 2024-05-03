import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import {
  checkNomeProduto,
  createProduto,
  deleteProduto,
  listProdutos,
  readProduto,
  updateProduto,
} from "./produto.service";
import { CreateProdutoDto } from "./produto.types";

const index = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Lista os produtos da base.'
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Produtos' }
 }
 */
  const skip = req.query.skip ? parseInt(req.query.skip.toString()) : undefined;
  const take = req.query.take ? parseInt(req.query.take.toString()) : undefined;
  try {
    const produtos = await listProdutos(skip, take);
    res.status(StatusCodes.OK).json(produtos);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const create = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Adiciona um novo produto na base.'
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateProdutoDto' }
 }
 #swagger.responses[201] = {
 schema: { $ref: '#/definitions/Produto' }
 }
 */
  const produto = req.body as CreateProdutoDto;
  try {
    if (await checkNomeProduto(produto.nome)) {
      const novoProduto = await createProduto(produto);
      res.status(StatusCodes.CREATED).json(novoProduto);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const read = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Lê um produto na base.'
 #swagger.parameters['id'] = {
 in: 'id',
 schema: { $ref: '#/definitions/id' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Produto' }
 }
 */
  const { id } = req.params;
  try {
    const produto = await readProduto(id);
    if (!produto)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(produto);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const update = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Edita um produto na base.'
 #swagger.parameters['id'] = {
 in: 'id',
 schema: { $ref: '#/definitions/id' }
 }
  #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateProdutoDto' }
 }
 #swagger.responses[204]
 */
  const { id } = req.params;
  const produto = req.body;
  try {
    if (await checkNomeProduto(produto.nome, id)) {
      const updatedProduto = await updateProduto(id, produto);
      res.status(StatusCodes.NO_CONTENT).json();
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const remove = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Deleta um produto na base.'
 #swagger.parameters['id'] = {
 in: 'id',
 schema: { $ref: '#/definitions/id' }
 }
 #swagger.responses[204]
 */
  const { id } = req.params;
  try {
    const deletedProduto = await deleteProduto(id);
    res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
