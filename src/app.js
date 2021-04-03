const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-generic-session");
const redisStore = require("koa-redis");
const cors = require("koa2-cors");

const { SECRET_SESSION_KEY } = require("./conf/const");
const { REDIS_CONF } = require("./conf/db");

const indexViewRouter = require("./routes/view/index");
const userApiRouter = require("./routes/api/user");
const utilsApiRouter = require("./routes/api/utils");
const commonApiRouter = require("./routes/api/common");
const houseApiRouter = require("./routes/api/house");
const commentApiRouter = require("./routes/api/comment");
const notFoundRouter = require("./routes/notFound");

// error handler
onerror(app);

// middlewares
app.use(cors());
app.use(
  bodyparser({
    enableTypes: ["json", "form-data", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "ejs",
  })
);

// session配置
app.keys = [SECRET_SESSION_KEY];
app.use(
  session({
    key: "travel.sid", // cookie name
    prefix: "travel:sess", // redis key的前缀
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // ms
    },
    store: redisStore({
      all: `${REDIS_CONF.host}:${REDIS_CONF.port}`,
    }),
  })
);

// routes
app.use(indexViewRouter.routes(), indexViewRouter.allowedMethods());
app.use(userApiRouter.routes(), userApiRouter.allowedMethods());
app.use(utilsApiRouter.routes(), utilsApiRouter.allowedMethods());
app.use(commonApiRouter.routes(), commonApiRouter.allowedMethods());
app.use(houseApiRouter.routes(), houseApiRouter.allowedMethods());
app.use(commentApiRouter.routes(), commentApiRouter.allowedMethods());
app.use(notFoundRouter.routes(), notFoundRouter.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

app.listen(6006, () => {
  console.log("Server is running on 6006");
});
