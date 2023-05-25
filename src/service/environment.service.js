const {
  getAllEnvironmentDB,
  createEnvironmentDB,
  getEnvironmentByIdDB,
  updateEnvironmentDB,
  deleteEnvironmentDB,
  patchEnvironmentDB,
} = require("../repository/environment.repository");

async function getAllEnvironment() {
  const data = await getAllEnvironmentDB();
  if (!data.length) throw new Error("DB is empty");

  return data;
}

async function createEnvironment(label, category, priority) {
  const data = await createEnvironmentDB(label, category, priority);
  if (!data.length) throw new Error("Object not created");

  return data;
}

async function getEnvironmentById(id) {
  const data = await getEnvironmentByIdDB(id);
  if (!data.length) throw new Error("id not found");

  return data;
}

async function updateEnvironment(id, label, category, priority) {
  const data = await updateEnvironmentDB(id, label, category, priority);
  if (!data.length) throw new Error("id not found");

  return data;
}

async function deleteEnvironment(id) {
  const data = await deleteEnvironmentDB(id);
  if (!data.length) throw new Error("id not found");

  return data;
}

async function patchEnvironment(id, clientData) {
  const data = await patchEnvironmentDB(id, clientData);
  if (!data.length) throw new Error("id not found");

  return data;
}

module.exports = {
  getAllEnvironment,
  createEnvironment,
  getEnvironmentById,
  updateEnvironment,
  deleteEnvironment,
  patchEnvironment,
};
