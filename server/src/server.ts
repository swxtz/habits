import * as dotenv from "dotenv";
dotenv.config();

import Fastify from "fastify";

import cors from "@fastify/cors";

import { appRoutes } from "./routes";

const app = Fastify();
const port = Number(process.env.PORT);

app.register(cors);
app.register(appRoutes);

app.listen({
  port,
}).then(() => {
  console.log(`Server is running... http://localhost:${port}`);
});
