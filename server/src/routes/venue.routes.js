import express from "express";
import { getAllVenues } from "../controllers/venue.controller.js";

const router = express.Router();

router.get("/", getAllVenues);

export default router;