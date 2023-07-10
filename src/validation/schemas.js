import joi from "joi";
//define the schema
export const searchSchema = {
  search: joi.string().required().max(32),
};

export const contactFormSchema = {
  name: joi.string().required().min(2),
  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } }),
  message: joi.string().required().min(30),
};
