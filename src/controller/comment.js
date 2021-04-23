const { ErrorModel, SuccessModel } = require("../model");
const {
  addComment,
  getComments,
  getComment,
  updateComment,
} = require("../service/comment");
const xss = require("xss");
const isVoid = require("../utils/isVoid");
const isFalsy = require("../utils/isFalsy");

const add = async (ctx) => {
  const { houseId, msg } = ctx.request.body;
  const { id } = ctx.session.userInfo;
  const prevComment = await getComment(id, houseId);
  if (isVoid(prevComment)) {
    const res = await addComment(id, houseId, xss(msg));
    if (isVoid(res)) {
      return ErrorModel(500, "评论失败");
    }
    return new SuccessModel(200, "ok");
  }
  const res = await updateComment(id, houseId, msg);
  if (isFalsy(res)) {
    return new ErrorModel(500, "评论失败");
  }
  return new SuccessModel(200, "ok");
};

const lists = async (ctx) => {
  const { houseId, pageSize = 8, pageIndex = 0 } = ctx.request.body;
  const res = await getComments(pageIndex, pageSize, houseId);
  if (isVoid(res)) {
    return new ErrorModel(500, "获取评论列表失败");
  }
  res.pageIndex = pageIndex;
  res.pageSize = pageSize;
  return new SuccessModel(200, res);
};

const getSelfComment = async (ctx) => {
  const { houseId } = ctx.request.body;
  const { id } = ctx.session.userInfo;
  const res = await getComment(id, houseId);
  return new SuccessModel(200, isVoid(res) ? "" : res.msg);
};

module.exports = {
  add,
  lists,
  getSelfComment,
};
