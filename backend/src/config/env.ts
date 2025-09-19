import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
  WHOIS_API_KEY: process.env.WHOIS_API_KEY || "",
  PORT: process.env.PORT || 5000,
};
