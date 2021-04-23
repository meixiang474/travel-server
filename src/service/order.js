const { Order, HouseImage, House } = require("../db/model");
const isVoid = require("../utils/isVoid");
const { formatOrders } = require("./_format");
const cleanObject = require("../utils/cleanObject");

const getOrder = async (userId, houseId, orderId) => {
  try {
    const res = await Order.findOne({
      where: cleanObject({
        userId,
        houseId,
        id: orderId,
      }),
    });
    if (isVoid(res)) {
      return res;
    }
    return res.dataValues;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const createOrder = async (userId, houseId, isPayed) => {
  try {
    const res = await Order.create({
      userId,
      houseId,
      isPayed,
    });
    if (isVoid(res)) {
      return res;
    }
    return res.dataValues;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const removeOrder = async (userId, houseId) => {
  try {
    const res = await Order.destroy({
      where: {
        userId,
        houseId,
      },
    });
    return res > 0;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getOrders = async ({ pageIndex, pageSize, userId, isPayed }) => {
  try {
    const res = await Order.findAndCountAll({
      order: [["updatedAt", "desc"]],
      limit: pageSize,
      attributes: {
        exclude: ["userId", "houseId"],
      },
      offset: pageIndex * pageSize,
      where: {
        userId,
        isPayed,
      },
      include: [
        {
          model: House,
          attributes: ["id", "name", "info", "price"],
          include: [
            {
              model: HouseImage,
            },
          ],
        },
      ],
      distinct: true,
    });
    if (isVoid(res)) {
      return res;
    }
    return formatOrders(res);
  } catch (e) {
    console.error(e);
    return null;
  }
};

const updateOrder = async (userId, id, isPayed) => {
  try {
    console.log(isPayed);
    const res = await Order.update(
      { isPayed, orderNum: id + Date.now() },
      {
        where: {
          userId,
          id,
        },
      }
    );
    return res[0] > 0;
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  getOrder,
  createOrder,
  removeOrder,
  getOrders,
  updateOrder,
};
