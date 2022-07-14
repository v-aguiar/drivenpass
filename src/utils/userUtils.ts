import jwt from "jsonwebtoken";

const JWT_KEY = process.env.JWT_SECRET || "JWT_KEY";
const EXPIRATION_TIME = "1d";

const userUtils = {
  generateToken: (userId: number) => {
    const token = jwt.sign({ userId }, JWT_KEY, { expiresIn: EXPIRATION_TIME });
    return token;
  },

  verifyToken: (token: string) => {
    return jwt.verify(token, JWT_KEY);
  },
};

export default userUtils;
