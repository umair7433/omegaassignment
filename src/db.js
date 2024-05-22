require('dotenv').config();

const mongoose = require('mongoose');

// Connect to the MongoDB server using the environment variable
mongoose.connect("mongodb+srv://adminuser:nGogT314RksQTGOX@cluster0.9ya7xfn.mongodb.net/", {
    serverSelectionTimeoutMS: 5000, // Optional but recommended

}).then(console.log("databse started "));

