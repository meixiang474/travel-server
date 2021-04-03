const { DEFAULT_PICTURE } = require("../conf/const");

const formatUser = (res) => {
  if (!res.avatar) {
    res.picture = DEFAULT_PICTURE;
  }
  return res;
};

module.exports = {
  formatUser,
};
