const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path");
const User = require("./db/User")
const productRoutes = require('./routes/productRoutes')
const app = express();
require('./db/config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post("/register", async (req, res) => {
    try {
        let user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        res.status(200).send(result);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post("/login", async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({ error: "Email and Password are required" })
        }
        const user = await User.findOne({ email: req.body.email }).select("-password");
        if (user) {
            res.status(200).send(user);
        }
        else {
            res.status(404).send({ error: "User not found" })
        }
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
});

// Use the address routes under the "/api" path
app.use('/api', productRoutes);

app.listen(5000, async () => {
    console.log("Server is running on port 5000")
})
