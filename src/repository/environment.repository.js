const pool = require("../db");

async function getAllEnvironmentDB() {
  const client = await pool.connect();
  const sql = "select * from environment";
  const result = (await client.query(sql)).rows;

  return result;
}

async function createEnvironmentDB(label, category, priority) {
  const client = await pool.connect();
  const sql = "insert into environment (label, category, priority) values ($1, $2, $3) returning *";
  const result = (await client.query(sql, [label, category, priority])).rows;

  return result;
}

async function getEnvironmentByIdDB(id) {
  const client = await pool.connect();
  const sql = "select * from environment where id = $1";
  const result = (await client.query(sql, [id])).rows;

  return result;
}

async function updateEnvironmentDB(id, label, category, priority) {
  const client = await pool.connect();
  const sql = "update environment set label = $1, category = $2, priority = $3 where id = $4 returning *";
  const result = (await client.query(sql, [label, category, priority, id])).rows;

  return result;
}

async function deleteEnvironmentDB(id) {
  const client = await pool.connect();
  const sql = "delete from environment where id = $1 returning *";
  const result = (await client.query(sql, [id])).rows;

  return result;
}

async function patchEnvironmentDB(id, clientData) {
  const client = await pool.connect();
  const sql = "select * from environment where id = $1";
  const result = (await client.query(sql, [id])).rows;

  const newObj = { ...result[0], ...clientData };

  const sql2 = "update environment set label = $1, category = $2, priority = $3 where id = $4 returning *";
  const result2 = (await client.query(sql2, [ newObj.label, newObj.category, newObj.priority, id, ])).rows;

  return result2;
}

module.exports = {
  getAllEnvironmentDB,
  createEnvironmentDB,
  getEnvironmentByIdDB,
  updateEnvironmentDB,
  deleteEnvironmentDB,
  patchEnvironmentDB,
};
