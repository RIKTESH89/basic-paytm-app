const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account, User } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async function (req, res) {
  const userId = req.userId;
  const check = await User.findOne({ _id: userId });
  // console.log(check);
  const amount = await Account.findOne({ userId: userId });
  res.json({
    balance: amount.balance,
    firstName: check.firstName,
  });
});

router.post("/transfer", authMiddleware, async function (req, res) {
  const session = await mongoose.startSession();

  session.startTransaction();

  const reciepent = req.body.to;
  const money = req.body.amount;
  const userId = req.userId;

  const account1 = await Account.findOne({ userId: userId }).session(session);

  if (!account1 || account1.balance < money) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient Balance",
    });
  }

  const toAccount = await Account.findOne({ userId: reciepent }).session(
    session
  );

  if (!toAccount) {
    await session.abortTransaction();
    return res.json(400).json({
      message: "Invalid account",
    });
  }

  await Account.updateOne(
    { userId: userId },
    { $inc: { balance: -money } }
  ).session(session);

  await Account.updateOne(
    { userId: reciepent },
    { $inc: { balance: money } }
  ).session(session);

  await session.commitTransaction();

  res.json({
    message: "Transaction Successful",
  });
});

module.exports = router;
