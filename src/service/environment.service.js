const {
  getAllEnvironmentDB,
  getSkillByIdDB,
} = require("../repository/environment.repository");

async function getAllEnvironment() {
  const data = await getAllEnvironmentDB();
  return data;
}

async function getSkillById(id) {
  const data = await getSkillByIdDB(id);
  return data;
}

module.exports = { getAllEnvironment, getSkillById };
