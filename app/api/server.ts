import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = process.env.PORT;

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

app.get("/user", async (req, res) => {
    const users = await prisma.usuarios.findMany();
    res.json(users);
});

app.post("/user", async (req, res) => {
    await prisma.usuarios.create({
        data: {
            nome: "Teste",
            email: "teste@gmail.com",
            senha: "teste123"
        }
    });

    res.status(201).send();
});



app.listen(port, () => console.log("rodando com sucesso"));