import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import whoisRoutes from "./routes/whoisRoutes";

const app = express();

// middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(morgan("dev"));
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: { error: "Too many requests, please try again later." },
});
app.use(limiter);

// API Routes
app.use("/api/whois", whoisRoutes);

// Health Check / Root Endpoint
app.use("/", (req, res) => {
  res.send("Server is online");
});

export default app;
