const router = require("koa-router")();
const { hot, search, detail } = require("../../controller/house");

router.prefix("/api/house");

router.get("/hot", async (ctx) => {
  ctx.body = await hot(ctx);
});

router.post("/search", async (ctx) => {
  ctx.body = await search(ctx);
});

router.post("/detail", async (ctx) => {
  ctx.body = await detail(ctx);
});

module.exports = router;
