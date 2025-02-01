//coures route

import express from "express";
import {
  getAllCourse,
  getAdminCourse,
  getSingleCoures,
} from "../controllers/course.controller.js";
import { isAuthenticate } from "../middlwares/authentication.js";
import { createCourse } from "../controllers/admin.controller.js";



const route = express.Router();

route.post("/create", isAuthenticate, createCourse);
route.get("/", getAllCourse);
route.get('/:id', getSingleCoures)


export default route;
