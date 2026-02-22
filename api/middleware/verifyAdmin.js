import jwt from "jsonwebtoken";

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;

  
  if (!token) {
    return res.status(401).json("Not authenticated");
  }

  // verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json("Token not valid");
    }

    req.user = user; 
    next();
  });
};