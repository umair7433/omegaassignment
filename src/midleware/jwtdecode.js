const jwt = require('jsonwebtoken');

// Middleware to decode the token
function decodeToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    // Attach decoded data to the request object for use in the route handler
    req.userData = decoded;
    next();
  });
}


module.exports=decodeToken
