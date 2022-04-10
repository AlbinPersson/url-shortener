import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Url, validate } from "models/Url";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const urls = await Url.find();
  return res.send(urls);
});

router.get("/:id", async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid Id");

  const url = await Url.findById(req.params.id);
  if (!url)
    return res.status(404).send(`url with id: ${req.params.id} was not found`);

  return res.send(url);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  let url = new Url({
    originalUrl: req.body.originalUrl,
  });

  url = await url.save();

  return res.status(201).send(url);
});

export default router;
