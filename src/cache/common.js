const { set, get } = require("./_redis");
const axios = require("axios");
const isVoid = require("../utils/isVoid");

const KEY_PREFIX = "travel:common:";

const getCitiesFromCache = async () => {
  try {
    const key = `${KEY_PREFIX}cities`;
    const cacheRes = await get(key);
    if (!isVoid(cacheRes)) {
      return cacheRes;
    }
    const { data } = await axios.get("https://apis.imooc.com", {
      params: {
        icode: "F5E20C9F38192C8D",
      },
    });
    if (isVoid(data)) {
      return data;
    }
    data.cities = data.citys;
    delete data.citys;
    set(key, data, 60);
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  getCitiesFromCache,
};
