const { ErrorModel, SuccessModel } = require("../model");
const { addComment, getComments } = require("../service/comment");
const xss = require("xss");
const isVoid = require("../utils/isVoid");

const add = async (ctx) => {
  const { houseId, msg } = ctx.request.body;
  const { id } = ctx.session.userInfo;
  const res = await addComment(id, houseId, xss(msg));
  if (isVoid(res)) {
    return ErrorModel(500, "评论失败");
  }
  return new SuccessModel(200, res);
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

module.exports = {
  add,
  lists,
};
