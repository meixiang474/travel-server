const { SuccessModel, ErrorModel } = require("../model");
const { getCitiesFromCache } = require("../cache/common");

const cities = async (ctx) => {
  const res = await getCitiesFromCache();
  if (res) {
    return new SuccessModel(200, res);
  }
  return new ErrorModel(500, "获取城市列表失败");
};

module.exports = {
  cities,
};
