const { User } = require("../db/model");
const cleanObject = require("../utils/cleanObject");
const { formatUser } = require("./_format");

const getUser = async (username, password) => {
  try {
    const res = await User.findOne({
      where: cleanObject({
        username,
        password,
      }),
    });
    return formatUser(res.dataValues);
  } catch (e) {
    console.error(e);
    return null;
  }
};

const addUser = async (params) => {
  try {
    const res = await User.create(params);
    if (res == null) {
      return res;
    }
    return formatUser(res.dataValues);
  } catch (e) {
    console.error(e);
    return null;
  }
};

const updateUser = async (params, username) => {
  try {
    const res = await User.update(cleanObject(params), {
      where: {
        username,
      },
    });
    return res[0] > 0;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  getUser,
  addUser,
  updateUser,
};
