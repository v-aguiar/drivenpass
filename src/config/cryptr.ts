import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const KEY = process.env.SECRET_KEY_CRYPTR || "SECRET_KEY_CRYPTR";

const cryptr = new Cryptr(KEY);

export default cryptr;
