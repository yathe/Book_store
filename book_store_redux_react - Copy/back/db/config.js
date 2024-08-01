const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://yathesth:yathesth@cluster0.i9ms2cm.mongodb.net/bookstore")
    .then(() => console.log('MongoDB Connected to Database....'))
    .catch(err => console.error("MongoDB Connection Eroor", err))