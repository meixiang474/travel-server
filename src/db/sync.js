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
  ]);
  console.log("sync ok");
  process.exit();
});
