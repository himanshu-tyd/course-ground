import express from "express";
import dotevn from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/connection.js";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import adminRoute from "./routes/admin.route.js";
import path from "path";

dotevn.config();

const port = 8000;
const app = express();
const __dirname = path.resolve();
console.log(__dirname);

const options = {
  origin: "*",
  Credential: true,
  METHODS: ["GET", "POST", "PUT", "DELETE"],
};

app.options("", cors(options));
app.use(cors(options));
app.use(express.json());
app.use(cookieParser());

//test api

app.get("/api/test", (req, res) => {
  res.send("hello there");
});

app.use("/api/users", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/course", courseRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
  connectDB();
});

export default app;
