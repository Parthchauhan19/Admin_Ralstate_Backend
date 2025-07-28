import jwt from "jsonwebtoken";
import User from "../Model/user.js";

const Auth = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is invalid" });
  }
};

export default Auth;
