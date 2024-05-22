// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const Secret_key="tisisthesecreatkashfkjndskjfn"
const cookieParser = require("cookie-parser");
const session = require("express-session");
function isAuthenticated(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/login");
    }

    try {
        const decoded = jwt.verify(token, Secret_key);
        req.user = decoded; // Attach user information to the request object
        return next();
    } catch (error) {
        return res.redirect("/login");
    }
}




module.exports = isAuthenticated;
