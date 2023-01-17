import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors"

const app = Fastify();
const port = Number(process.env.PORT);
const prisma = new PrismaClient();

app.register(cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber"
      }
    }
  });

  return habits;
});

app
  .listen({
    port
  })
  .then(() => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
