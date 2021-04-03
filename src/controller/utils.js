const fse = require("fs-extra");
const path = require("path");
const {
  DEFAULT_UPLOAD_PATH,
  DIST_FOLDER_PATH,
  MAX_SIZE,
} = require("../conf/const");
const { SuccessModel, ErrorModel } = require("../model");

fse.pathExists(DIST_FOLDER_PATH).then((exist) => {
  if (!exist) {
    fse.ensureDir(DIST_FOLDER_PATH);
  }
});

const upload = async (ctx) => {
  const { name, size, path: filePath } = ctx.req.files["file"];
  if (size > MAX_SIZE) {
    await fse.remove(filePath);
    return new ErrorModel(500, "上传的文件体积过大");
  }
  const filename = Date.now() + "." + name;
  const distFilePath = path.join(DIST_FOLDER_PATH, filename);
  await fse.move(filePath, distFilePath);
  return new SuccessModel(200, {
    url: DEFAULT_UPLOAD_PATH + filename,
  });
};

module.exports = {
  upload,
};
