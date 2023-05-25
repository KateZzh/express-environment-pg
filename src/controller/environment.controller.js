const express = require("express");
const {
  getAllEnvironment,
  createEnvironment,
  getEnvironmentById,
  updateEnvironment,
  deleteEnvironment,
  patchEnvironment,
} = require("../service/environment.service");
const { isValidEnvironmentId, isValidEnvironmentBody, } = require("../helper/validation");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await getAllEnvironment();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", isValidEnvironmentBody, async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnvironment(label, category, priority);

    res.status(201).send(data);
  } catch (error) {
    res.status(405).send(error.message);
  }
});

router.get("/:id", isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getEnvironmentById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put("/:id", isValidEnvironmentBody, isValidEnvironmentId, async (req, res) => {
    try {
      const { id } = req.params;
      const { label, category, priority } = req.body;
      const data = await updateEnvironment(id, label, category, priority);

      res.status(200).send(data);
    } catch (error) {
      res.status(404).send(error.message);
    }
  }
);

router.delete("/:id", isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteEnvironment(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const clientData = req.body;
    const data = await patchEnvironment(id, clientData);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
