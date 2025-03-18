import express from "express";
import { Request, Response } from "express";
const port = 3333;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
