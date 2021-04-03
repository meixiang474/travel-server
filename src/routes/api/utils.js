const router = require("koa-router")();
const loginCheck = require("../../middlewares/loginCheck");
const koaForm = require("formidable-upload-koa");
const { upload } = require("../../controller/utils");

router.prefix("/api/utils");

router.post("/upload", loginCheck, koaForm(), async (ctx) => {
  ctx.body = await upload(ctx);
});

module.exports = router;
