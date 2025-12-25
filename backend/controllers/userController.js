import express from "express";
import dotenv from "dotenv"
import userModel from "../models/user.js";

dotenv.config()

const router=express.Router()

router.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        status: false,
        msg: "Email already exists❌",
      });
    }

    const user = new userModel(req.body);
    await user.save();

    res.status(200).json({
      status: true,
      msg: "User registered successfully✅",
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: false, msg: "Email and password are required" });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ status: false, msg: "User not Found❌" });
        }

        if (password === user.password) {
            return res.status(200).json({ status: true, msg: "Successful login✅",email:user.email });
        } else {
            return res.status(401).json({ status: false, msg: "Invalid credentials❌" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, msg: "Internal server error" });
    }
});

router.get("/dashboard/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(404).json({
        status: false,
        msg: "User not found"
      });
    }

    res.status(200).json({
      status: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      msg: "Server error"
    });
  }
});

export default router;