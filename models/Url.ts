import mongoose from "mongoose";
import Joi from "joi";
import { Url as IUrl } from "types";

export const Url = mongoose.model(
  "Url",
  new mongoose.Schema({
    originalUrl: { type: String, maxlength: 1000, required: true },
  })
);

export function validate(url: IUrl) {
  const schema = Joi.object({
    originalUrl: Joi.string().max(1000).required(),
  });

  return schema.validate(url);
}
