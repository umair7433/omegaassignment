
const express = require("express")
const UserModle = require("../modle/RegisterModle")
const loginRouter = express.Router()
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../midleware/jwt"); // Adjust the path accordingly
const PackageModle=require("../modle/Packagemodle")

loginRouter.post("/register", async (req, res) => {

  try {

    const { email, password, confirmPassword, phone } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).render("index.hbs", { Message: "Password not matched" });
    }

    const NewUser = new UserModle({
      email: email,
      password: password,
      phone: phone
    })


    await NewUser.save()
    res.render("login.hbs")

  } catch (e) {
    res.redirect("/")

  }

});

loginRouter.get("/login", async  (req, res) => {
  res.render("login.hbs",)


})
const Secret_key="tisisthesecreatkashfkjndskjfn"


loginRouter.post("/logined", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModle.findOne({ email: email });
    if (!user) {
      res.render("login.hbs", { Message: "Incorrect email" });
    } else {
      // Perform password comparison logic
      const userpass = user.password
      if (userpass == password) {
        // Password matches, perform the login logic
        const token = jwt.sign({ userId: user._id, email: user.email }, Secret_key, { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true })
        try{

          const findpkg=await PackageModle.findOne({email:user.email})
          const balance=findpkg.balance
          
          res.render("user.hbs",{balance})
        }catch(w){
          res.render("user.hbs")
        }
        
      } else {
        res.render("login.hbs", { Message: "Incorrect password" });
      }
    }
  } catch (e) {
    return res.status(400).render("login.hbs", { Message: "Error" });
  }
});



module.exports = loginRouter