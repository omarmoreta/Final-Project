const bcrypt = require("bcrypt");
const db = require("../models");

const { User } = db;

router.post("/", async (req, res) => {
  let user = await User.findOne({
    where: { username: req.body.username },
  });
  if (
    !user ||
    !(await bcrypt.compare(req.body.password, user.password))
  ) {
    res.status(404).json({
      message: `Could not find a user with the provided username and password`,
    });
  } else {
    req.session.username = user.username;
    res.json({ user });
  }
});

router.get("/profile", async (req, res) => {
  res.json(req.currentUser);
});

module.exports = router;
