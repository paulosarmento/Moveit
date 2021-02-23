import express from "express";
import "./database";
const app = express();

app.get("/users", (req, res) => {
  return res.send({ message: "Hello world" });
});

app.post("/", (req, res) => {
  return res.json({ message: "Os dados foram salvos com sucesso!" });
});

app.listen(3333, () => console.log("Server is running!"));
