function genValidator(validateFn) {
  async function validator(ctx, next) {
    const data = ctx.request.body;
    const error = validateFn(data);
    if (error) {
      ctx.body = { status: 500, errMsg: "校验格式不匹配" };
      return;
    }
    // 验证成功继续
    await next();
  }
  return validator;
}

module.exports = genValidator;
