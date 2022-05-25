const users = require("express").Router();
const db = require("../models");
const { User } = db;
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

users.get("/:id", async (req, res) => {
  try {
    const foundUser = await User.findOne({
      where: { username: req.params.id },
    });
    res.status(200).json(foundUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

users.post("/signup", async (req, res) => {
  try {
    let { password, ...rest } = req.body;
    const newUser = await User.create({
      ...rest,
      passwordDigest: await bcrypt.hash(password, 12),
    });
    res.status(200).json({
      message: "Successfully inserted a new user",
      data: newUser,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = users;
