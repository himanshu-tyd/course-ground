import jwt from "jsonwebtoken";

export const isAuthenticate = async (req, res, next) => {
  try {
    const myJwt = await req.cookies.jwtToken;

    if (!myJwt) {
      return res.json({ success: false, message: "You are not authenticate" });
    }

    const decode = jwt.verify(myJwt, process.env.JWT_SECRET);

    if (!decode) {
      return res.json({ success: false, message: "You don't have access" });
    }

    req.userId = decode.userId;
    req.userRole=decode.role

    next();
  } catch (error) {
    res.json({ success: false, message: "opps somethig went wrong", error });
  }
};
