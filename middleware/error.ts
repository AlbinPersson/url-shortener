import { Request, Response } from "express";

export default function (req: Request, res: Response) {
  return res.status(500).send("Internal server error");
}
