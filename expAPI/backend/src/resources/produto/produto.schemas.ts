import Joi from "joi";

export const produtoSchema = Joi.object().keys({
  nome: Joi.string().min(3).max(50).required().messages({
    "any.required": "O campo {#label} é obrigatório",
    "string.base": "O campo {#label} deve ser uma string",
    "string.min": "O tamanho deve ser de no mínimo 3 caracteres",
    "string.max": "O tamanho deve ser de no máximo 50 caracteres",
  }),
  preco: Joi.number().required().messages({
    "number.base": "O campo {#label} deve ser um número",
    "any.required": "O campo {#label} é obrigatório",
  }),
  estoque: Joi.number().positive().integer().required().messages({
    "number.base": "O campo {#label} deve ser um número",
    "number.positive": "O valor de {#label} precisa ser positivo",
    "number.integer": "O valor de {#label} deve ser inteiro",
    "any.required": "O campo {#label} é obrigatório",
  }),
  tags: Joi.array().items(Joi.string()),
});

const produto = {
  nome: "Teste",
  preco: 4.5,
  estoque: 30,
  tags: ["1", "motorola"],
};

const { error, value } = produtoSchema.validate(produto);
if (error) console.log(error.details);
console.log(value);
