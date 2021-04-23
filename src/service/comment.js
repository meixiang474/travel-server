const { Comment, User } = require("../db/model");
const isVoid = require("../utils/isVoid");
const { formatComments } = require("./_format");

const addComment = async (userId, houseId, msg) => {
  try {
    const res = await Comment.create({
      userId,
      houseId,
      msg,
    });
    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const updateComment = async (userId, houseId, msg) => {
  try {
    const res = await Comment.update(
      { msg },
      {
        where: {
          userId,
          houseId,
        },
      }
    );
    return res[0] > 0;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getComment = async (userId, houseId) => {
  try {
    const res = await Comment.findOne({
      where: {
        userId,
        houseId,
      },
    });
    if (isVoid(res)) {
      return res;
    }
    return res.dataValues;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getComments = async (pageIndex, pageSize, houseId) => {
  try {
    const res = await Comment.findAndCountAll({
      order: [["updatedAt", "desc"]],
      where: {
        houseId,
      },
      limit: pageSize,
      offset: pageIndex * pageSize,
      include: [
        {
          model: User,
          attributes: ["avatar", "username"],
        },
      ],
    });
    return formatComments(res);
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = {
  addComment,
  getComments,
  getComment,
  updateComment,
};
