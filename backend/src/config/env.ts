import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
  WHOIS_API_KEY: process.env.WHOIS_API_KEY || "",
  WHOIS_BASE_URL:
    process.env.WHOIS_BASE_URL ||
    "https://www.whoisxmlapi.com/whoisserver/WhoisService",
  PORT: process.env.PORT || 5000,
};
