//get a reference to the file system module
var fs = require("fs");
var fse = require("fs-extra");
var src = "docs";
var dist = "dist";

// create dist dir
try {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }
} catch (err) {
  console.error(err);
}

fse.copySync(src, dist, { overwrite: true }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
});

fse.copySync(
  `${src}/wizard/config/config.staging.js`,
  `${dist}/wizard/config/config.js`,
  { overwrite: true },
  function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
  }
);
