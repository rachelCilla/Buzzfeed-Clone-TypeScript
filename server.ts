import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { QuizData } from "./interfaces";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

app.get("/quiz-item", async (req: Request, res: Response) => {
  try {
    const response: AxiosResponse = await axios.get(process.env.URL, {
      headers: {
        "X-Cassandra-Token": process.env.TOKEN,
        accept: "application/json",
      },
    });
    if (response.status === 200) {
      const quizItem: QuizData = await response.data.data[
        "ffc812e3-df60-4f40-a411-3bb6660c1101"
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
