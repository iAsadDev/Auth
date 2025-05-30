const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = new User({
      username,
      email,
      password,
    });
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1h",
        }); 
        res.json({ token });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})
// Get user data
router.get("/",authMiddleware, async (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
        email: req.user.email,
    });
});