const Sequelize = require("sequelize");
const { House, HouseImage } = require("../db/model");
const cleanObejct = require("../utils/cleanObject");
const { formatHouses, formatHouseInfo } = require("./_format");

const getHouses = async (pageIndex, pageSize, params = {}) => {
  try {
    const where = cleanObejct(params);
    if (where.startTime) {
      where.startTime = {
        [Sequelize.Op.gte]: where.startTime,
      };
    }
    if (where.endTime) {
      where.endTime = {
        [Sequelize.Op.lte]: where.endTime,
      };
    }
    if (where.name) {
      where.name = {
        [Sequelize.Op.like]: "%" + where.name + "%",
      };
    }
    const res = await House.findAndCountAll({
      limit: pageSize,
      offset: pageIndex * pageSize,
      order: [["showCount", "desc"]],
      where,
      attributes: {
        exclude: ["startTime", "endTime", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: HouseImage,
          attributes: ["url"],
        },
      ],
      distinct: true,
    });
    return formatHouses(res);
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getHouseInfo = async (id) => {
  try {
    const res = await House.findOne({
      where: {
        id,
      },
      include: [
        {
          model: HouseImage,
          attributes: ["url"],
        },
      ],
    });
    return formatHouseInfo(res);
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  getHouses,
  getHouseInfo,
};
