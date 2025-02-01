import jwt from "jsonwebtoken";

export const GenerateCookie = (userId, role, res) => {
  const token = jwt.sign(
    { userId: userId, role: role },
    process.env.JWT_SECRET,
    {
      expiresIn: "10d",
    }
  );

  res.cookie("jwtToken", token, {
    httpOnly: true,
    expiresIn: token.expiresIn,
  });
};
