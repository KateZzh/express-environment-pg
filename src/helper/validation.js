function isValidEnvironmentId(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) throw new Error("id not a number");
  if (id < 0) throw new Error("id is less than zero");

  next();
}

function isValidEnvironmentBody(req, res, next) {
  const { label, category, priority } = req.body;

  if (!label) throw new Error("label is empty");
  if (!category) throw new Error("category is empty");
  if (!priority) throw new Error("priority is empty");

  if (!isNaN(label)) throw new Error("incorrect label");
  if (!isNaN(category)) throw new Error("incorrect category");
  if (isNaN(priority)) throw new Error("incorrect priority");
  if (priority < 0) throw new Error("priority is less than zero");

  next();
}

module.exports = { isValidEnvironmentId, isValidEnvironmentBody };
