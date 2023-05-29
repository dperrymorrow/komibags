const Handlebars = require("handlebars");
const sizeOf = require("image-size");
const path = require("path");
const fs = require("fs");

const { thumbDir, originalDir } = require("./constants.js");
const template = Handlebars.compile(fs.readFileSync("./src/index.hbs", "utf8"));
const images = [];

fs.readdirSync(originalDir)
  .filter((file) => file.toLowerCase().endsWith("jpg"))
  .map((file) => {
    const org = path.join(originalDir, file);
    const thumb = path.join(thumbDir, file);

    const size = sizeOf(org);
    images.push({
      size,
      thumb,
      full: org,
    });
  });

const html = template({ images });
fs.writeFileSync("./index.html", html);
