const validate = require("./_validate");

// 校验规则
const SCHEMA = {
  type: "object",
  properties: {
    houseId: {
      type: "number",
    },
  },
};

const orderValidate = (data = {}) => {
  return validate(SCHEMA, data);
};

module.exports = orderValidate;
