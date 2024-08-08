import { config } from "dotenv";
config();

import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;

async function main() {
  console.log(`Running in ${process.env.ENVIRONMENT} mode.`);
  try {
    app.listen(PORT, () => console.log(`Runnung on Port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

main();
