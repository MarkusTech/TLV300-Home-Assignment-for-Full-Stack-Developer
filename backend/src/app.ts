import express from "express";
import cors from "cors";
import whoisRoutes from "./routes/whoisRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/whois", whoisRoutes);

app.use("/", (req, res) => {
  res.send("Server is online");
});

export default app;
