const router = require("koa-router")();
const loginCheck = require("../../middlewares/loginCheck");
const { add, lists, getSelfComment } = require("../../controller/comment");
const commentValidate = require("../../validator/comment");
const genValidator = require("../../middlewares/validator");

router.prefix("/api/comment");

router.post("/add", loginCheck, genValidator(commentValidate), async (ctx) => {
  ctx.body = await add(ctx);
});

router.post("/lists", async (ctx) => {
  ctx.body = await lists(ctx);
});

router.post("/getSelfComment", loginCheck, async (ctx) => {
  ctx.body = await getSelfComment(ctx);
});

module.exports = router;
