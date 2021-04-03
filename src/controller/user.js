const { getUser, addUser, updateUser } = require("../service/user");
const doCrypto = require("../utils/cryp");
const unPick = require("../utils/unPick");
const { SuccessModel, ErrorModel } = require("../model");

const register = async (ctx) => {
  const params = ctx.request.body;
  const user = await getUser(params.username);
  if (user) {
    return ErrorModel(500, "用户已存在");
  }
  const res = await addUser({
    ...params,
    password: doCrypto(params.password),
  });
  if (res) {
    return SuccessModel(200, unPick(res, ["password"]));
  }
  return ErrorModel(500, "注册用户失败");
};

const login = async (ctx) => {
  const { username, password } = ctx.request.body;
  const userInfo = await getUser(username, doCrypto(password));
  if (!userInfo) {
    return ErrorModel(500, "该用户不存在");
  }
  ctx.session.userInfo = userInfo;
  return SuccessModel(200, unPick(userInfo, ["password"]));
};

const detail = async (ctx) => {
  const { userInfo } = ctx.session;
  return SuccessModel(200, unPick(userInfo, ["password"]));
};

const logout = async (ctx) => {
  try {
    ctx.session.userInfo = null;
    return SuccessModel(200, "ok");
  } catch (e) {
    return ErrorModel(500, "退出登录失败");
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
  if (res) {
    Object.assign(ctx.session.userInfo, params);
    return SuccessModel(200, "ok");
  }
  return ErrorModel(500, "修改用户信息失败");
};

module.exports = {
  register,
  login,
  detail,
  logout,
  edit,
};
