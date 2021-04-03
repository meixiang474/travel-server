const { ErrorModel } = require("../model");

const genValidator = (validateFn) => {
  async function validator(ctx, next) {
    const data = ctx.request.body;
    const error = validateFn(data);
    if (error) {
      ctx.body = new ErrorModel(500, "格式校验未通过");
      return;
    }
    // 验证成功继续
    await next();
  }
  return validator;
};

module.exports = genValidator;
