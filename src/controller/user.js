const { getUser, addUser, updateUser } = require("../service/user");
const doCrypto = require("../utils/cryp");
const unPick = require("../utils/unPick");
const { SuccessModel, ErrorModel } = require("../model");
const isVoid = require("../utils/isVoid");
const isFalsy = require("../utils/isFalsy");

const register = async (ctx) => {
  const params = ctx.request.body;
  const user = await getUser(params.username);
  if (!isVoid(user)) {
    return new ErrorModel(500, "用户已存在");
  }
  const res = await addUser({
    ...params,
    password: doCrypto(params.password),
  });
  if (isVoid(res)) {
    return new ErrorModel(500, "注册用户失败");
  }
  return new SuccessModel(200, unPick(res, ["password"]));
};

const login = async (ctx) => {
  const { username, password } = ctx.request.body;
  const userInfo = await getUser(username, doCrypto(password));
  if (isVoid(userInfo)) {
    return new ErrorModel(500, "该用户不存在");
  }
  ctx.session.userInfo = userInfo;
  return new SuccessModel(200, unPick(userInfo, ["password"]));
};

const detail = async (ctx) => {
  try {
    const { userInfo } = ctx.session;
    return new SuccessModel(200, unPick(userInfo, ["password"]));
  } catch (e) {
    return new ErrorModel(500, "查询用户信息失败");
  }
};

const logout = async (ctx) => {
  try {
    ctx.session.userInfo = null;
    return new SuccessModel(200, "ok");
  } catch (e) {
    return new ErrorModel(500, "退出登录失败");
  }
};

const edit = async (ctx) => {
  const params = ctx.request.body;
  console.log(params);
  const { username } = ctx.session.userInfo;
  const res = await updateUser(
    { ...params, password: doCrypto(params.password) },
    username
  );
  if (isFalsy(res)) {
    return new ErrorModel(500, "修改用户信息失败");
  }
  Object.assign(ctx.session.userInfo, params);
  return new SuccessModel(200, "ok");
};

module.exports = {
  register,
  login,
  detail,
  logout,
  edit,
};
