//get a reference to the file system module
var fs = require("fs");
var fse = require("fs-extra");
var src = "docs";
var dist = "dist";

// create dist dir
try {
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  } else {
    fse.emptyDirSync(dist);
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
  `${src}/wizard/config/config.prod.js`,
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

fse.remove(`${dist}/wizard/config/config.staging.js`)
fse.remove(`${dist}/wizard/config/config.prod.js`)
fse.remove(`${dist}/wizard/config/sample-provisioning-info.js`)
