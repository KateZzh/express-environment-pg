const express = require("express");
const { getAllEnvironment, getSkillById } = require("../service/environment.service");

const route = express.Router();

route.get("/", async (req, res) => {
  const data = await getAllEnvironment();
  res.send(data);
});

route.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSkillById(id);
    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});
module.exports = route;
