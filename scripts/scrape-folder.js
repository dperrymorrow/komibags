const fs = require("fs");
const path = require("path");
const Jimp = require("jimp");
const { thumbDir, fullDir, originalDir } = require("./constants.js");

fs.rmSync(thumbDir, { recursive: true, force: true });
fs.rmSync(fullDir, { recursive: true, force: true });

fs.readdirSync(originalDir)
  .filter((file) => file.endsWith(".jpg"))
  .map((file) => {
    const original = path.join(originalDir, file);
    const thumb = path.join(thumbDir, file);
    // const full = path.join(fullDir, file.toLocaleLowerCase());

    return Jimp.read(original, (err, lenna) => {
      if (err) {
        console.log(original);
        throw err;
      }
      lenna
        .resize(400, Jimp.AUTO) // resize
        .quality(100) // set JPEG quality
        .write(thumb); // save

      // just going to use the originals...
      // lenna
      //   .resize(2000, Jimp.AUTO) // resize
      //   .quality(100) // set JPEG quality
      //   .write(full); // save
    });
  });
