import Joi from "joi";

export const languageSchema = Joi.object().keys({
  lang: Joi.valid("pt-BR", "en-US").required().messages({
    "any.only": "Os valores válidos são apenas pt-BR e en-US",
  }),
});
