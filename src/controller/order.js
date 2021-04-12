const {
  getOrder,
  createOrder,
  removeOrder,
  getOrders,
  updateOrder,
} = require("../service/order");
const isVoid = require("../utils/isVoid");
const { SuccessModel, ErrorModel } = require("../model");
const isFalsy = require("../utils/isFalsy");

const hasOrder = async (ctx) => {
  const { id } = ctx.session.userInfo;
  const { houseId } = ctx.request.body;
  const res = await getOrder(id, houseId);
  return new SuccessModel(200, res);
};

const addOrder = async (ctx) => {
  const { id } = ctx.session.userInfo;
  const { houseId } = ctx.request.body;
  const res = await createOrder(id, houseId, false);
  if (isVoid(res)) {
    return new ErrorModel(500, "预定失败");
  }
  return new SuccessModel(200, res);
};

const deleteOrder = async (ctx) => {
  const { id } = ctx.request.body;
  const res = await removeOrder(id);
  if (isFalsy(res)) {
    return new ErrorModel(500, "取消预定失败");
  }
  return new SuccessModel(200, res);
};

const lists = async (ctx) => {
  const { pageSize = 8, pageIndex = 0, isPayed = false } = ctx.request.body;
  const { id } = ctx.session.userInfo;
  const res = await getOrders({ pageIndex, pageSize, userId: id, isPayed });
  if (isVoid(res)) {
    return new ErrorModel(500, "获取订单列表失败");
  }
  res.pageIndex = pageIndex;
  res.pageSize = pageSize;
  return new SuccessModel(200, res);
};

const pay = async (ctx) => {
  const { orderId } = ctx.request.body;
  const { id } = ctx.session.userInfo;
  const orderInfo = await getOrder(id, null, orderId);
  if (isVoid(orderInfo)) {
    return new ErrorModel(500, "订单不存在");
  }
  const res = await updateOrder(id, orderId, true);
  if (isFalsy(res)) {
    return new ErrorModel(500, "支付失败");
  }
  return new SuccessModel(200, res);
};

module.exports = {
  hasOrder,
  addOrder,
  deleteOrder,
  lists,
  pay,
};
