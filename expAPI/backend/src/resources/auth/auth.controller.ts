import { Request, Response } from "express";
import { createUsuario } from "../usuario/usuario.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { checkCredencials } from "./auth.service";
import { json } from "stream/consumers";

const signup = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Cria um novo usuario na base.'
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateUsuarioDto' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Usuario' }
 }
 */
  const usuario = req.body;

  try {
    const novoUsuario = await createUsuario(usuario, "client");
    res.status(StatusCodes.CREATED).json(novoUsuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const login = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Acessa a conta de um usuário'
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/Credenciais' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/UsuarioDto' }
 }
 */
  const credencials = req.body;
  try {
    const usuario = await checkCredencials(credencials);
    if (!usuario)
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json(ReasonPhrases.UNAUTHORIZED);
    req.session.uid = usuario.id;
    req.session.tipoUsuarioId = usuario.tipoUsuarioId;
    req.session.carrinho = [];
    res.status(StatusCodes.OK).json(usuario);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const logout = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Encessa o acesso a conta de um usuário'
 #swagger.responses[200]
 */
  if (req.session.uid) {
    req.session.destroy(() => {
      res.status(StatusCodes.OK).json(ReasonPhrases.OK);
    });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
  }
};

export default { signup, login, logout };
