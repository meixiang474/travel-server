const isVoid = require("../utils/isVoid");
const { SuccessModel, ErrorModel } = require("../model");
const { getHotFromCache, getPublicHousesFromCache } = require("../cache/house");
const { getHouses, getHouseInfo } = require("../service/house");
const resolveTime = require("../utils/resolveTime");

const hot = async (ctx) => {
  const res = await getHotFromCache();
  if (isVoid(res)) {
    return new ErrorModel(500, "获取热门民宿列表失败");
  }
  return new SuccessModel(200, res);
};

const search = async (ctx) => {
  const { pageIndex = 0, pageSize = 8, ...params } = ctx.request.body;
  if (Object.keys(params).length === 0) {
    const res = await getPublicHousesFromCache(pageIndex, pageSize);
    if (isVoid(res)) {
      return new ErrorModel(500, "获取民宿列表失败");
    }
    res.pageIndex = pageIndex;
    res.pageSize = pageSize;
    return new SuccessModel(200, res);
  }
  const res = await getHouses(pageIndex, pageSize, {
    ...params,
    startTime: resolveTime(params.startTime),
    endTime: resolveTime(params.endTime),
  });
  if (isVoid(res)) {
    throw new ErrorModel(500, "查询民宿列表失败");
  }
  res.pageIndex = pageIndex;
  res.pageSize = pageSize;
  return new SuccessModel(200, res);
};

const detail = async (ctx) => {
  const { id } = ctx.request.body;
  const res = await getHouseInfo(id);
  if (isVoid(res)) {
    return new ErrorModel(500, "获取民宿信息失败");
  }
  return new SuccessModel(200, res);
};

module.exports = {
  hot,
  search,
  detail,
};
