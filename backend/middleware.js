const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "invalid token" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id; //middleware sets userId in request object
    next();
  } catch (error) {
    return res.status(401).json({ msg: "user not authenticated" });
  }
};

module.exports = { authMiddleware };
