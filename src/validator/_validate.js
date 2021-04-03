const Ajv = require("ajv").default;
const ajv = new Ajv();

const validate = (schema, data = {}) => {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    return ajv.errors[0];
  }
};

module.exports = validate;
