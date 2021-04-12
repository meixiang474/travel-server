const { DEFAULT_PICTURE } = require("../conf/const");
const isVoid = require("../utils/isVoid");

const formatUser = (res) => {
  if (isVoid(res)) {
    return res;
  }
  if (isVoid(res.avatar)) {
    res.avatar = DEFAULT_PICTURE;
  }
  return res;
};

const formatHouses = (res) => {
  const houses = res.rows.map((row) => {
    const res = row.dataValues;
    res.url = res.houseImages[0].dataValues.url;
    delete res.houseImages;
    return res;
  });
  return {
    count: res.count,
    houses,
  };
};

const formatHouseInfo = (res) => {
  if (isVoid(res)) {
    return res;
  }
  const houseInfo = res.dataValues;
  houseInfo.images = houseInfo.houseImages.map((item) => item.dataValues.url);
  delete houseInfo.houseImages;
  return houseInfo;
};

const formatComments = (res) => {
  const comments = res.rows.map((row) => {
    const res = row.dataValues;
    res.user = formatUser(res.user.dataValues);
    return res;
  });
  return {
    count: res.count,
    comments,
  };
};

const formatOrders = (res) => {
  const orders = res.rows.map((row) => {
    const res = row.dataValues;
    res.house = res.house.dataValues;
    res.house.image = res.house.houseImages[0].dataValues.url;
    delete res.house.houseImages;
    return res;
  });
  return {
    count: res.count,
    orders,
  };
};

module.exports = {
  formatUser,
  formatHouses,
  formatHouseInfo,
  formatComments,
  formatOrders,
};
