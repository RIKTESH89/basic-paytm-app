const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const splitToken = token.split(" ")[1];

  try {
    const decoded = jwt.verify(splitToken, JWT_SECRET);

    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({});
  }
}

module.exports = { authMiddleware };
