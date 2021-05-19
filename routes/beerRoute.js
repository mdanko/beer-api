import { getBeer } from "../controllers/beerController.js";
import express from "express";

const router = express.Router();

router.route("/").get(getBeer);

export default router;
