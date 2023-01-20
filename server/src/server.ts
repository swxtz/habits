import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";

import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";

const app = Fastify();
const port = Number(process.env.PORT);

app.register(cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber",
      },
    },
  });

  return habits;
});

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
