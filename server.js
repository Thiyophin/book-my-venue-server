import dotenv from "dotenv";
import app from "./server/src/app.js";
import connectDB from "./server/src/config/db.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});