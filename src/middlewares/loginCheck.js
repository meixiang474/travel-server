const { ErrorModel } = require("../model");

async function loginCheck(ctx, next) {
  if (ctx.session && ctx.session.userInfo) {
    // 已登录
    return next();
  }
  ctx.body = new ErrorModel(403, "当前用户未登录");
}

module.exports = loginCheck;
