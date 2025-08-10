const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { UserModel, AccountModel } = require("../db");
const { authMiddleware } = require("../middleware");

//Signup
const signupZodValidationSchema = zod.object({
  username: zod.string().min(3).max(25).trim().toLowerCase(),
  password: zod.string().min(6),
  firstName: zod.string().trim(),
  lastName: zod.string().trim(),
});

router.post("/signup", async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const validate = signupZodValidationSchema.safeParse(req.body);
  if (!validate.success) {
    return res.status(411).json({ msg: "invalid data" });
  }
  const existingUser = await UserModel.findOne({ username: req.body.username });
  if (existingUser) {
    return res.status(411).json({ msg: "user alredy exists" });
  }

  try {
    const user = await UserModel.create({
      username,
      password,
      firstName,
      lastName,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    await AccountModel.create({
      userId: user._id,
      balance: 1 + Math.random() * 10000,
    });

    res.status(200).json({ msg: "user registered", token });
  } catch (error) {
    console.log("Registration error:", error);
    res.status(500).json({ msg: "error in registering", error: error.message });
  }
});

//signin

const signinZodValidationSchema = zod.object({
  username: zod.string().trim(),
  password: zod.string().trim(),
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const validate = signinZodValidationSchema.safeParse(req.body);
  if (!validate.success) {
    return res.status(411).json({ msg: "invalid credentials" });
  }
  try {
    const user = await UserModel.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).json({ msg: "user logged in", token, id: user._id });
    } else {
      res.status(400).json({ msg: "invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ msg: "error in logging in", error: error.message });
  }
});
//update
const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});
router.put("/", authMiddleware, async (req, res) => {
  const { password, firstName, lastName } = req.body;
  const validate = updateBody.safeParse(req.body);

  if (!validate.success) {
    return res.status(411).json({ msg: "invalid data format" });
  }
  try {
    const user = await UserModel.updateOne({ _id: req.userId }, req.body);
    res.status(200).json({ msg: "user updated" });
  } catch (error) {}
});

//like

router.get("/bulk", authMiddleware, async (req, res) => {
  const filter = req.query.filter || "";

  try {
    const users = await UserModel.find({
      $and: [
        {
          _id: { $ne: req.userId }, // Exclude current user
        },
        {
          $or: [
            {
              firstName: { $regex: filter, $options: "i" },
            },
            {
              lastName: { $regex: filter, $options: "i" },
            },
          ],
        },
      ],
    });

    res.json({
      user: users.map((user) => ({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    return res.status(411).json({ msg: "error while fetching users" });
  }
});

//me
router.get("/me", authMiddleware, async (req, res) => {
  const userId = req.userId;
  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.status(200).json({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "error fetching user data", error: error.message });
  }
});

module.exports = router;
