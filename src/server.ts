import chalk from "chalk";
import dotenv from "dotenv"

import server from "./index.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(
    chalk.bold.greenBright("\nš Server is running!") +
      chalk.bold.cyanBright("\n\nListening on port " + PORT + "...\n")
  );
});
