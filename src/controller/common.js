const { SuccessModel, ErrorModel } = require("../model");
const { getCitiesFromCache } = require("../cache/common");
const isVoid = require("../utils/isVoid");

const cities = async (ctx) => {
  const res = await getCitiesFromCache();
  if (isVoid(res)) {
    return new ErrorModel(500, "获取城市列表失败");
  }
  return new SuccessModel(200, res);
};

module.exports = {
  cities,
};
