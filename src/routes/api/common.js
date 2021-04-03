const router = require("koa-router")();
const { cities } = require("../../controller/common");

router.prefix("/api/common");

router.get("/cities", async (ctx) => {
  ctx.body = await cities(ctx);
});

module.exports = router;
