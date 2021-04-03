const seq = require("../seq");
const { INTEGER, TEXT } = require("../types");

const Comment = seq.define("comment", {
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: "用户id",
  },
  houseId: {
    type: INTEGER,
    allowNull: false,
    comment: "房屋id",
  },
  msg: {
    type: TEXT,
    allowNull: false,
    comment: "评论",
  },
});

module.exports = Comment;
