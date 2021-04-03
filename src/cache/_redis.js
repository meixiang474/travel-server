const redis = require("redis");
const { REDIS_CONF } = require("../conf/db");

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);
redisClient.on("error", (err) => {
  console.error("redis error", err);
});

function set(key, val, timeout = 60 * 60) {
  const newVal = JSON.stringify(val);
  redisClient.set(key, newVal);
  redisClient.expire(key, timeout);
}

function get(key) {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
      }
      if (val == null) {
        resolve(null);
      }
      resolve(JSON.parse(val));
    });
  });
  return promise;
}

module.exports = {
  set,
  get,
};
