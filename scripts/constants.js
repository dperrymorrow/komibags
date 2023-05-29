const prefix = "./assets/imgs/";
const path = require("path");

module.exports = {
  thumbDir: path.join(prefix, "thumbs"),
  fullDir: path.join(prefix, "fullsize"),
  originalDir: path.join(prefix, "originals"),
};
