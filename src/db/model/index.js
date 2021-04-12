const User = require("./User");
const House = require("./House");
const HouseImage = require("./HouseImage");
const Comment = require("./Comment");
const Order = require("./Order");

House.hasMany(HouseImage, {
  foreignKey: "houseId",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
});

Order.belongsTo(House, {
  foreignKey: "houseId",
});

module.exports = {
  User,
  House,
  HouseImage,
  Comment,
  Order,
};
