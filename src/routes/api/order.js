const router = require("koa-router")();
const {
  hasOrder,
  addOrder,
  deleteOrder,
  lists,
  pay,
} = require("../../controller/order");
const loginCheck = require("../../middlewares/loginCheck");
const genValidator = require("../../middlewares/validator");
const orderValidate = require("../../validator/order");

router.prefix("/api/order");

router.post("/hasOrder", loginCheck, async (ctx) => {
  ctx.body = await hasOrder(ctx);
});

router.post(
  "/addOrder",
  loginCheck,
  genValidator(orderValidate),
  async (ctx) => {
    ctx.body = await addOrder(ctx);
  }
);

router.post(
  "/deleteOrder",
  loginCheck,
  genValidator(orderValidate),
  async (ctx) => {
    ctx.body = await deleteOrder(ctx);
  }
);

router.post("/lists", loginCheck, async (ctx) => {
  ctx.body = await lists(ctx);
});

router.post("/pay", loginCheck, async (ctx) => {
  ctx.body = await pay(ctx);
});

module.exports = router;
