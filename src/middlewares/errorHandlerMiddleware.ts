﻿import { NextFunction, Request, Response } from "express";

export default function errorHandlerMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.name === "badRequest") {
    console.error(error.message);
    res.status(400).send(error.message);
  }

  if (error.name === "unauthorized") {
    console.error(error.message);
    res.status(401).send(error.message);
  }

  if (error.name === "notFound") {
    console.error(error.message);
    res.status(404).send(error.message);
  }

  if (error.name === "alreadyExists") {
    console.error(error.message);
    res.status(409).send(error.message);
  }

  if (error.name === "unprocessableEntity") {
    console.error(error.message);
    res.status(422).send(error.message);
  }

  console.error("⚠ Something went wrong!: ", error);
  res.status(500).send("⚠ Something went wrong!");
}
