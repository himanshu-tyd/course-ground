import express from "express";
import {
  signin,
  signup,
  buyCoures,
  myCourse,
  updatePassword,
} from "../controllers/user.controller.js";
import { getAllCourse } from "../controllers/course.controller.js";
import { isAuthenticate } from "../middlwares/authentication.js";


const route = express.Router();

route.post("/signup", signup);
route.post("/signin", signin);
route.post("/buy/:id",isAuthenticate,  buyCoures);
route.get('/mycourse' , isAuthenticate , myCourse )
route.get("/", getAllCourse);
route.post("/update-password",isAuthenticate, updatePassword);

export default route;
