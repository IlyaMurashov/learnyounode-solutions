const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, cb) => {
  const extWithDot = "." + ext;

  fs.readdir(dir, (err, files) => {
    if (err) {
      return cb(err);
    }
    else {
      cb(null, files.filter(li => path.extname(li) === extWithDot));
    }
  });
};

