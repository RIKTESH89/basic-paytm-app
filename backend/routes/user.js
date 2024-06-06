const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");

const { authMiddleware } = require("../middleware");

const signupCheck = zod.object({
  userName: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const signinCheck = zod.object({
  userName: zod.string().email(),
  password: zod.string(),
});

const UpdateCheck = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

router.post("/signup", async function (req, res) {
  const body = req.body;

  const { success } = signupCheck.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Invalid Inputs",
    });
  }

  const existingUser = await User.findOne({ userName: body.userName });
  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken / Invalid Inputs",
    });
  }

  const user = await User.create({
    userName: body.userName,
    password: body.password,
    firstName: body.firstName,
    lastName: body.lastName,
  });

  const userId = user._id;

  await Account.create({
    userId,
    balance: Math.floor(Math.random() * 10000) + 1,
  });

  const token = jwt.sign({ userId }, JWT_SECRET);

  res.json({
    message: "User created successfully",
    token: token,
  });
});

router.post("/signin", async function (req, res) {
  const body = req.body;
  const { success } = signinCheck.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }
  const userCheck = await User.findOne({
    userName: body.userName,
    password: body.password,
  });

  if (userCheck) {
    const token = jwt.sign({ userId: userCheck._id }, JWT_SECRET);
    return res.json({
      token: token,
      name: userCheck.firstName,
    });
  } else {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }
});

router.put("/", authMiddleware, async function (req, res) {
  const id = req.userId;
  const body = req.body;

  const { success } = UpdateCheck.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Error while updating indormation",
    });
  }

  await User.updateOne({ _id: id }, body);
  res.json({
    message: "Updated Successfully",
  });
});

router.get("/bulk", authMiddleware, async function (req, res) {
  const filter = req.query.filter || "";
  const userId = req.userId;

  const users = await User.find({
    $and: [
      {
        _id: { $ne: userId }, // Exclude the user with userId
      },
      {
        $or: [
          {
            firstName: {
              $regex: filter,
              $options: "i",
            },
          },
          {
            lastName: {
              $regex: filter,
              $options: "i",
            },
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
});

module.exports = router;
