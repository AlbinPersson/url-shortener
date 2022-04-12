import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Url, validate, validateUpdate } from "models/Url";

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

  if (url.validTime && url.validTime < new Date()) {
    return res.status(400).send("url has expired");
  }

  return res.send(url);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  let validTime;
  if (req.body.validTime) {
    validTime = new Date().getTime() + req.body.validTime * 60000;
  }

  let url = new Url({
    originalUrl: req.body.originalUrl,
    validTime: validTime ? validTime : null,
  });

  url = await url.save();

  return res.status(201).send(url);
});

router.put("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid Id");

  const { error } = validateUpdate(req.body);
  if (error) return res.status(400).send(error.message);

  const url = await Url.findById(req.params.id);
  if (!url) return res.status(404).send("Not Found");

  url.validTime = new Date().getTime() + req.body.validTime * 60000;

  await url.save();

  return res.send(url);
});

router.delete("/:id", async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send("Invalid Id");

  const url = await Url.findByIdAndDelete(req.params.id);
  if (!url) return res.status(404).send("Not Found");

  return res.send(url);
});

export default router;
