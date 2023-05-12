const fs = require("fs");
const sizeOf = require("image-size");
const path = require("path");

const images = [];
const prefix = "./assets/imgs/";

fs.readdirSync("./assets/imgs")
  .filter((file) => file.toLowerCase().endsWith(".jpg"))
  .forEach((file) => {
    const size = sizeOf(prefix + file);

    images.push({
      size,
      thumb: path.join(prefix + "thumbs/" + file),
      full: path.join(prefix + file),
    });
  });

fs.writeFileSync("./assets/data.json", JSON.stringify(images, null, 2));
