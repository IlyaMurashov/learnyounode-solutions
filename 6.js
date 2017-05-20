const fileFilteredReader = require('./6-module');

const dir = process.argv[2];
const ext = process.argv[3];

fileFilteredReader(dir, ext, (err, fileList) => {
  if (err) {
    console.error("Failed to read the files. " + err);
  }
  else {
    fileList.forEach(i => console.log(i));
  }
});