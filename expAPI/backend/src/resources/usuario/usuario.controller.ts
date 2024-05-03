import { Request, Response } from "express";
import {
  checkEmail,
  createUsuario,
  deleteUser,
  listUsers,
  readUser,
  updateUser,
} from "./usuario.service";
import { TipoUsuario } from "./usuario.types";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const index = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Lista os usuarios cadastrados na base.'
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Usuarios' }
 }
 */
  try {
    const usuarios = await listUsers();
    res.status(StatusCodes.OK).json(usuarios);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const create = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Adiciona um novo usuário na base.'
  #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateUsuarioDto' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Usuario' }
 }
 */
  const usuario = req.body;
  const tipoUsuario = req.query.tipoUsuario as TipoUsuario;

  try {
    const novoUsuario = await createUsuario(usuario, tipoUsuario);
    res.status(StatusCodes.OK).json(novoUsuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const read = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Lê um usuario na base.'
 #swagger.parameters['id'] = {
 in: 'id',
 schema: { $ref: '#/definitions/id' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Usuario' }
 }
 */
  const { id } = req.params;
  try {
    const usuario = await readUser(id);
    if (!usuario)
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(usuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const update = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Edita um usuario na base.'
 #swagger.parameters['id'] = {
 in: 'id',
 schema: { $ref: '#/definitions/id' }
 }
  #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/UpdateUsuarioDto' }
 }
 #swagger.responses[204]
 */
  const { id } = req.params;
  const usuario = req.body;
  try {
    if (await checkEmail(usuario.email, id)) {
      const updatedUser = await updateUser(id, usuario);
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
 #swagger.summary = 'Deleta um usuario na base.'
 #swagger.parameters['id'] = {
 in: 'id',
 schema: { $ref: '#/definitions/id' }
 }
 #swagger.responses[204]
 */
  const { id } = req.params;
  try {
    const deletedUser = await deleteUser(id);
    res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
