import Joi from "joi";

export const produtoSchema = Joi.object().keys({
  nome: Joi.string().min(3).max(50).required(),
  preco: Joi.number().required(),
  estoque: Joi.number().positive().integer().required().messages({
    "number.positive": "O {#label} precisa ser positivo",
    "any.required": "O estoque é obrigatório",
  }),
  tags: Joi.array().items(Joi.string()),
});

const produto = {
  nome: "Olaaa",
  preco: 4.5,
  estoque: 30,
  tags: ["1", "motorola"],
};

const result = produtoSchema.validate(produto);
console.log(result);
