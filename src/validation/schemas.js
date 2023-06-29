import joi from "joi";
//define the schema
export const searchSchema = {
  search: joi.string().required().min(2).max(32),
};
