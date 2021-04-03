const seq = require("../seq");
const { STRING } = require("../types");

const User = seq.define("user", {
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: "用户名 唯一",
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: "密码",
  },
  avatar: {
    type: STRING,
    comment: "头像图片地址",
  },
  phone: {
    type: STRING,
    comment: "电话",
  },
});

module.exports = User;
