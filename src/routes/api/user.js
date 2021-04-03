const router = require("koa-router")();
const {
  register,
  login,
  detail,
  logout,
  edit,
} = require("../../controller/user");
const genValidator = require("../../middlewares/validator");
const userValidate = require("../../validator/user");
const loginCheck = require("../../middlewares/loginCheck");

router.prefix("/api/user");

router.post("/register", genValidator(userValidate), async (ctx) => {
  ctx.body = await register(ctx);
});

router.post("/login", genValidator(userValidate), async (ctx) => {
  ctx.body = await login(ctx);
});

router.post("/detail", loginCheck, async (ctx) => {
  ctx.body = await detail(ctx);
});

router.post("/logout", loginCheck, async (ctx) => {
  ctx.body = await logout(ctx);
});

router.post("/edit", loginCheck, async (ctx) => {
  ctx.body = await edit(ctx);
});

module.exports = router;
