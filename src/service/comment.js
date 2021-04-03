const { Comment, User } = require("../db/model");
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

const getComments = async (pageIndex, pageSize, houseId) => {
  try {
    const res = await Comment.findAndCountAll({
      order: [["createdAt", "desc"]],
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
};
