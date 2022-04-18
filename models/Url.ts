import mongoose from "mongoose";
import Joi from "joi";
import { Url as IUrl } from "types";

export const Url = mongoose.model(
  "Url",
  new mongoose.Schema({
    originalUrl: { type: String, maxlength: 1000, required: true },
    validTime: { type: Date },
    shortUrl: { type: String, required: true },
  })
);

export function validate(url: IUrl) {
  const schema = Joi.object({
    originalUrl: Joi.string()
      .uri({
        scheme: ["http", "https"],
      })
      .max(1000)
      .required(),
    validTime: Joi.number().min(1).max(1000),
  });

  return schema.validate(url);
}
export function validateUpdate(url: IUrl) {
  const schema = Joi.object({
    validTime: Joi.number().min(1).max(1000).required(),
  });

  return schema.validate(url);
}
