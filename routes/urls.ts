import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { Url, validate, validateUpdate } from "models/Url";

const router = express.Router();

// 60000 milliseconds 1 minute
const TIME = 60000;

router.get("/", async (req: Request, res: Response) => {
  const urls = await Url.find();
  return res.send(urls);
});

router.get("/:id", async (req: Request, res: Response) => {
  const url = await Url.findOne({ shortUrl: req.params.id });
  if (!url)
    return res.status(404).send(`url with id: ${req.params.id} was not found`);

  //Check if URl is still valid
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
    validTime = new Date().getTime() + req.body.validTime * TIME;
  }

  let url = new Url({
    originalUrl: req.body.originalUrl,
    validTime: validTime ? validTime : null,
  });

  //creates shorturl from last 6 character from objectId (last 6 uniqe per machine)
  url.shortUrl = url._id.toString().slice(18, 24);

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

  // updates validTime or creates new
  const validTime = url.validTime ? url.validTime : new Date();
  url.validTime = validTime.getTime() + req.body.validTime * TIME;

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
