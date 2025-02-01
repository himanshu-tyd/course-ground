import bcryptjs from "bcryptjs";

export const generateHash = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  return await bcryptjs.hash(password, salt);
};

export const compareHash = async (password, user) => {
  return await bcryptjs.compare(password, user.password);
};
