const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const compression = require("compression");

app.use(compression()); // Compress all routes

const Session_key = "thisisthahfbsainf43254325";

app.use(cookieParser());
app.use(
  session({
    secret: Session_key,
    resave: false,
    saveUninitialized: true,
  })
);

require("./src/db");

app.use(express.json()); // To parse JSON
app.use(express.urlencoded({ extended: false })); // To parse form data

app.set("view engine", "hbs");

// Set up static files directory
app.use(express.static(path.join(__dirname, "public")));

// Set up views directory
app.set("views", path.join(__dirname, "src", "views"));

// Register partials directory
hbs.registerPartials(path.join(__dirname, "src", "views", "partials"));

app.get("/", (req, res) => {
  res.render("index"); // No need to specify ".hbs" extension here
});

const loginRouter = require("./src/router/login");
app.use(loginRouter);

const userRouter = require("./src/router/UserRouter");
app.use(userRouter);

const adminRoute = require("./src/router/Admin");
app.use(adminRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
