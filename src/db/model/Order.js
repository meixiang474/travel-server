const seq = require("../seq");
const { INTEGER, BOOLEAN, STRING } = require("../types");

const Order = seq.define("order", {
  orderNum: {
    type: STRING,
    allowNull: true,
    comment: "订单编号",
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    comment: "用户id",
  },
  houseId: {
    type: INTEGER,
    allowNull: false,
    comment: "民宿id",
  },
  isPayed: {
    type: BOOLEAN,
    allowNull: false,
    comment: "是否支付",
  },
});

module.exports = Order;
