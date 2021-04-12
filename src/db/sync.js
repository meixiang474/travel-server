const seq = require("./seq");
const { House, HouseImage, User } = require("./model");
const doCrypto = require("../utils/cryp");

seq
  .authenticate()
  .then(() => {
    console.log("auth ok");
  })
  .catch(() => {
    console.log("auth err");
  });

seq.sync({ force: true }).then(async () => {
  await User.bulkCreate([
    {
      username: "zs",
      password: doCrypto("111"),
    },
    {
      username: "ls",
      password: doCrypto("111"),
    },
  ]);
  await House.bulkCreate([
    {
      name: "东城民宿",
      info: "东区 临近地铁",
      address: "东城区",
      price: 200,
      cityCode: "10001",
      showCount: 1,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-10-20 13:37:57"),
    },
    {
      name: "西城民宿",
      info: "西区 临近地铁",
      address: "西城区",
      price: 100,
      cityCode: "10001",
      showCount: 1,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-11-10 13:37:57"),
    },
    {
      name: "新区民宿",
      info: "新区民宿位置优越",
      address: "新城区",
      price: 150,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "西苑民宿",
      info: "西苑风景秀美",
      address: "西城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-11-10 13:37:57"),
    },
    {
      name: "紫金巷民宿",
      info: "紧邻老城区风景秀美",
      address: "东城区",
      price: 120,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-11-10 13:37:57"),
    },
    {
      name: "北戴河民宿",
      info: "风景秀美适合放松身心",
      address: "北城区",
      price: 100,
      cityCode: "10002",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "南苑民宿",
      info: "南苑民宿风景秀美",
      address: "东城区",
      price: 150,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-10-10 13:37:57"),
    },
    {
      name: "北苑民宿",
      info: "北苑民宿风景秀美",
      address: "北城区",
      price: 100,
      cityCode: "10002",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "三厢和民宿",
      info: "紧邻地铁交通方便",
      address: "东城区",
      price: 200,
      cityCode: "10003",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-10-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
    {
      name: "老城区民宿",
      info: "老城区风景秀美",
      address: "老城区",
      price: 100,
      cityCode: "10001",
      showCount: 0,
      startTime: new Date("2020-08-10 13:37:57"),
      endTime: new Date("2020-12-10 13:37:57"),
    },
  ]);
  await HouseImage.bulkCreate([
    {
      url:
        "http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg",
      houseId: 1,
    },
    {
      url:
        "http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png",
      houseId: 1,
    },
    {
      url:
        "http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg",
      houseId: 1,
    },
    {
      url:
        "http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg",
      houseId: 2,
    },
    {
      url:
        "https://img3.mukewang.com/szimg/5f3cdd710925166812000676-360-202.png",
      houseId: 2,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 3,
    },
    {
      url:
        "http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg",
      houseId: 4,
    },
    {
      url:
        "http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png",
      houseId: 5,
    },
    {
      url:
        "http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg",
      houseId: 6,
    },
    {
      url:
        "http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg",
      houseId: 7,
    },
    {
      url:
        "https://img3.mukewang.com/szimg/5f3cdd710925166812000676-360-202.png",
      houseId: 8,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 9,
    },
    {
      url:
        "http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg",
      houseId: 10,
    },
    {
      url:
        "http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png",
      houseId: 11,
    },
    {
      url:
        "http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg",
      houseId: 12,
    },
    {
      url:
        "http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg",
      houseId: 13,
    },
    {
      url:
        "https://img3.mukewang.com/szimg/5f3cdd710925166812000676-360-202.png",
      houseId: 14,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 15,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 15,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 15,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 16,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 17,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 18,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 19,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 20,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 21,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 22,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 23,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 24,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 25,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 26,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 27,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 28,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 29,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 30,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 31,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 32,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 33,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 34,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 35,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 36,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 37,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 38,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 39,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 40,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 41,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 42,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 43,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 44,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 45,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 46,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 47,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 48,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 49,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 50,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 51,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 52,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 53,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 54,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 55,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 56,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 57,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 58,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 59,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 60,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 61,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 62,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 63,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 64,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 65,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 66,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 67,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 68,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 69,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 70,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 71,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 72,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 73,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 74,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 75,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 76,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 77,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 78,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 79,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 15,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 80,
    },
    {
      url:
        "https://img4.mukewang.com/szimg/5f20e20109429b5f12000676-360-202.png",
      houseId: 81,
    },
  ]);
  console.log("sync ok");
  process.exit();
});
