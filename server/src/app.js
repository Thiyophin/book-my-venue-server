import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import venueRoutes from "./routes/venue.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API working");
});

app.use("/api/auth", authRoutes);

app.use("/api/venues", venueRoutes);

export default app;