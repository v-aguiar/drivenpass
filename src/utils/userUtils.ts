import jwt from "jsonwebtoken";

const JWT_KEY = process.env.JWT_SECRET || "JWT_KEY";
const EXPIRATION_TIME = "1d";

type DecodedTokenData = {
  userId: string;
};

const userUtils = {
  generateToken: (userId: number) => {
    const token = jwt.sign({ userId }, JWT_KEY, { expiresIn: EXPIRATION_TIME });
    return token;
  },

  verifyToken: (token: string) => {
    jwt.verify(token, JWT_KEY, (error, data) => {
      if (error) {
        throw {
          name: "expiredToken",
          message: "⚠ Token expired!",
        };
      }
    });

    return jwt.decode(token) as DecodedTokenData;
  },
};

export default userUtils;
