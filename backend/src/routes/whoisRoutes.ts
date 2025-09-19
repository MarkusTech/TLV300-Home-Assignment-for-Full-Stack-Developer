import { Router } from "express";
import { getWhoisData } from "../controller/whoisController";

const router = Router();

router.post("/", getWhoisData);

export default router;
