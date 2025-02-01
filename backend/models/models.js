import { model, Schema, Types } from "mongoose";

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,
  password: String,
});

const courseSchema = new Schema({
  title: String,
  desc: String,
  price: Number,
  imageUrl: String,
  creatorId: Types.ObjectId,
});

const purchaseSchema = new Schema({
  userId: Types.ObjectId,
  courseId: {
    type: Types.ObjectId,
    rel: "course",
  },
  isPurchased: {
    type: Boolean,
    enum: [false, true],
    default: false,
  },
});

const UserModel = model("user", userSchema);
const AdminModel = model("admin", adminSchema);
const CourseModel = model("course", courseSchema);
const PurchasedModel = model("purchase", purchaseSchema);

export { UserModel, AdminModel, CourseModel, PurchasedModel };
