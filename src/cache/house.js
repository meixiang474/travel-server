const KEY_PREFIX = "travel:house:";
const isVoid = require("../utils/isVoid");
const { set, get } = require("./_redis");
const { getHouses } = require("../service/house");

const getHotFromCache = async () => {
  try {
    const key = `${KEY_PREFIX}hot`;
    const cacheRes = await get(key);
    if (!isVoid(cacheRes)) {
      return cacheRes;
    }
    const res = await getHouses(0, 4);
    if (isVoid(res)) {
      return res;
    }
    res.hots = res.houses;
    delete res.houses;
    set(key, res, 60);
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getPublicHousesFromCache = async (pageIndex, pageSize) => {
  try {
    const key = `${KEY_PREFIX}${pageIndex}${pageSize}`;
    const cacheRes = await get(key);
    if (!isVoid(cacheRes)) {
      return cacheRes;
    }
    const res = await getHouses(pageIndex, pageSize);
    if (isVoid(res)) {
      return res;
    }
    set(key, res, 60);
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  getHotFromCache,
  getPublicHousesFromCache,
};
