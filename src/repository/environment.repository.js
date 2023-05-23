const pool = require("../db");

async function getAllEnvironmentDB() {
  const client = await pool.connect();
  const queryText = `select * from environment`;
  const arrOfVal = (await client.query(queryText)).rows;

  return arrOfVal;
}

async function getSkillByIdDB(id) {
  const client = await pool.connect();
  const sql = `select * from environment where id = $1`;
  const data = (await client.query(sql, [id])).rows;

  return data;
}

module.exports = { getAllEnvironmentDB, getSkillByIdDB };
