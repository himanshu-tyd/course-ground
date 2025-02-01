import { connect } from "mongoose";

const connectDB = async () => {

  console.log(process.env.MONGO_URI)

  try {
     await connect(process.env.MONGO_URI, {
      dbName: "course-ground",
    })

    console.log("database connected");
  } catch (e) {
    console.log("faile to connect database - error ->", e);
  }
};

export default connectDB