const seq = require("../seq");
const { STRING, INTEGER } = require("../types");

const HouseImage = seq.define("houseImage", {
  url: {
    type: STRING,
    allowNull: false,
    comment: "图片地址",
  },
  houseId: {
    type: INTEGER,
    allowNull: false,
    comment: "房屋id",
  },
});

module.exports = HouseImage;
