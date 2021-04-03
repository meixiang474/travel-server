const seq = require("../seq");
const { STRING, INTEGER, DATE } = require("../types");

const House = seq.define("house", {
  name: {
    type: STRING,
    allowNull: false,
    comment: "房屋名称",
  },
  info: {
    type: STRING,
    allowNull: false,
    comment: "房屋简介",
  },
  address: {
    type: STRING,
    allowNull: false,
    comment: "房屋地址",
  },
  price: {
    type: INTEGER,
    allowNull: false,
    comment: "房屋价格",
  },
  cityCode: {
    type: STRING,
    allowNull: false,
    comment: "所在城市编码",
  },
  showCount: {
    type: INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: "展示次数",
  },
  startTime: {
    type: DATE,
    allowNull: false,
    comment: "开始出租时间",
  },
  endTime: {
    type: DATE,
    allowNull: false,
    comment: "结束出租时间",
  },
});

module.exports = House;
