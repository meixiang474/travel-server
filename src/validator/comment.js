const validate = require("./_validate");

// 校验规则
const SCHEMA = {
  type: "object",
  properties: {
    houseId: {
      type: "number",
    },
    userId: {
      type: "number",
    },
    msg: {
      type: "string",
      maxLength: 255,
      minLength: 2,
    },
  },
};

const commentValidate = (data = {}) => {
  return validate(SCHEMA, data);
};

module.exports = commentValidate;
