const fs = require('fs');
const path = require('path');

const p = process.argv[2];
const ext = process.argv[3];

fs.readdir(p, (err, files) => {
  if (err) {
    console.error(err);
  }
  else {
    let items = files.filter(li => path.extname(li).slice(1) === ext);
    items.forEach(i => console.log(i));
  }
});