import { AdminModel, CourseModel } from "../models/models.js";



export const getAllCourse = async (req, res) => {
  const courses = await CourseModel.find();

  if (!courses || courses.length == 0) {
    return res.json({ success: false, message: " Courese not found" });
  }

  return res.json({
    success: true,
    message: "Here are you courses list",
    data: courses,
  });
};

export const getAdminCourse = async (req, res) => {
  const userId = req.userId;
  const userRole = req.userRole;

  try {
    if (userRole !== "admin") {
      return res.json({
        successfL: false,
        message: "You are not authorize to access this",
      });
    }

    if (!userId) {
      return res.json({ success: false, message: "failed to authenticate" });
    }

    const course = await CourseModel.find({
      creatorId: userId,
    });

    if (course.length < 0) {
      return res.json({ message: "You have not create any course yet!" });
    }

    res.json({ success: true, message: "course found", data: course });
  } catch (error) {
    return res.json({ success: false, message: "Intenal server error" });
  }
};

export const getSingleCoures = async (req, res) => {
  const id = req.params["id"];
  try {

    const couses = await CourseModel.findById(id);

    if (!couses) {
      return res.json({
        success: false,
        message: "this course does not exits",
      });
    }

    res.json({ success: true, message: "course found", data: couses });
  } catch (e) {
    console.log(e);
    return res.json({ success: false, message: "internal server error" });
  }
};
