import Joi from "joi";

export const createProductSchema = Joi.object({
  name: Joi.string().min(2).required(),

  price: Joi.number()
    .min(0)
    .required(),

  categoryId: Joi.string()
    .required(),
});