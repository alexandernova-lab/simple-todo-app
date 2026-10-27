import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const protect = async (req, res, next) => {
  try {
    let token;

    // 1. Check Authorization header (Bearer <token>)
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // 2. Fallback to check cookies if present
    else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    // 3. If no token found at all
    if (!token) {
      return res.status(400).json({ message: "Token need to provide" });
    }

    // 4. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Support both decoded._id or decoded.id depending on what was stored during JWT sign
    const userId = decoded._id || decoded.id;

    // 5. Fetch user and exclude password
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    // 6. Attach user to request object
    req.user = user;

    // 7. Proceed to next controller ONLY after req.user is set!
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res.status(401).json({ message: "Unauthenticated / Invalid Token" });
  }
};
