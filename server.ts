import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { QuizData } from "./interfaces";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 8000;

app.get("/quiz-item", async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const response: AxiosResponse = await axios.get(process.env.URL, {
      headers: {
        "X-Cassandra-Token": process.env.TOKEN,
        accept: "application/json",
      },
    });
    if (response.status === 200) {
      const quizItem: QuizData = await response.data.data[
        "8b657a1e-60ac-476b-85c4-154441f52017"
      ];
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.send(quizItem);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
