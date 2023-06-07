const Handlebars = require("handlebars");
const sizeOf = require("image-size");
const path = require("path");
const fs = require("fs");

const { thumbDir, originalDir } = require("./constants.js");

const layout = Handlebars.compile(fs.readFileSync("./src/layout.hbs", "utf8"));

const pages = {
  index: Handlebars.compile(fs.readFileSync("./src/index.hbs", "utf8")),
  about: Handlebars.compile(fs.readFileSync("./src/about.hbs", "utf8")),
};

const images = [];

fs.readdirSync(originalDir)
  .filter((file) => file.endsWith("jpg"))
  .map((file) => {
    const org = path.join(originalDir, file);
    const thumb = path.join(thumbDir, file);

    const largeSize = sizeOf(org);
    const smallSize = sizeOf(thumb);
    images.push({
      largeSize,
      smallSize,
      thumb,
      full: org,
    });
  });

Object.entries(pages).forEach(([name, template]) => {
  const html = layout({
    isAbout: name === "about",
    content: template({ images }),
  });
  fs.writeFileSync(`./${name}.html`, html);
});
