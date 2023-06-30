import joi from "joi";
//define the schema
export const searchSchema = {
  search: joi.string().required().max(32),
};
