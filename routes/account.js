const express = require("express");
const { authMiddleware } = require("../middleware");
const { AccountModel } = require("../db");
const mongoose = require("mongoose");

const router = express.Router();

//get balance
router.get("/balance", authMiddleware, async (req, res) => {
  const userId = req.userId; //get userId from middleware
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: "Invalid userId" });
  }
  try {
    const account = await AccountModel.findOne({ userId });
    return res.status(200).json({ balance: account.balance });
  } catch (error) {
    return res.status(500).json({ msg: "error in fetching balance" });
  }
});

//transfer money
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const { to, amount } = req.body;
  const toId = new mongoose.Types.ObjectId(to); //u need to convert string to objectId
  const fromId = req.userId;

  // Convert amount to number and validate
  const transferAmount = parseFloat(amount);
  if (!transferAmount || transferAmount <= 0) {
    await session.abortTransaction();
    session.endSession();
    return res.status(400).json({ msg: "Invalid amount" });
  }

  const fromAccount = await AccountModel.findOne({ userId: fromId }).session(
    session
  );
  if (!fromAccount || fromAccount.balance < transferAmount) {
    await session.abortTransaction();
    session.endSession();
    return res.status(411).json({ msg: "insufficient balance" });
  }

  const toAccount = await AccountModel.findOne({ userId: toId }).session(
    session
  );
  if (!toAccount) {
    await session.abortTransaction();
    session.endSession();
    return res.status(411).json({ msg: "invalid to account" });
  }
  try {
    await AccountModel.updateOne(
      { userId: fromId },
      {
        balance: fromAccount.balance - transferAmount,
      }
    ).session(session);

    await AccountModel.updateOne(
      { userId: toId },
      {
        balance: toAccount.balance + transferAmount,
      }
    ).session(session);

    await session.commitTransaction();
    session.endSession();

    res.status(200).json({ msg: "tansfer sucessful" });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ msg: "error in transfering money" });
  }
});

module.exports = router;
