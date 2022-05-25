const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const { Sequelize } = require("sequelize");
const usersController = require("./controllers/users_controller");

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", usersController);

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/dist"));

const sequelize = new Sequelize(process.env.PG_URI, {
  ssl: { require: false },
});

try {
  sequelize.authenticate();
} catch (err) {
  console.log(`Unable to connect to PG: ${err}`);
}

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/dist", "index.html"));
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "User API",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}!`);
});
