// server/index.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sendEmailWithPDF = require("./utils/emailSender");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-pedido", async (req, res) => {
  const templateData = req.body;
  console.log("Dados recebidos no servidor:", templateData);
  try {
    await sendEmailWithPDF({ to: "roger.ngt3494@gmail.com" }, templateData);
    console.log("E-mail enviado com sucesso!");
    res.status(200).json({ message: "Pedido enviado com sucesso!" }); // resposta em JSON
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: "Erro ao enviar o pedido" }); // resposta em JSON também
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
