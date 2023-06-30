import joi from "joi";
import { searchSchema } from "./schemas";
export const validate = async (payload, type) => {
  let r;
  switch (type) {
    case "search":
      //call joi
      r = joi.object(searchSchema);
      break;
    default:
      break;
  }

  try {
    const results = await r.validateAsync(payload);
    return null;
  } catch (errors) {
    const errorsMod = {};
    errors.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
    });
    // console.log(errorsMod);
    return errorsMod;
  }
};
