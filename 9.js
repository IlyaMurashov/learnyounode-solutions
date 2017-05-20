const http = require('http');

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

const queryUrl = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => rawData += chunk);
      res.on('end', () => {
        resolve(rawData);
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
};

Promise.all([queryUrl(url1), queryUrl(url2), queryUrl(url3)])
  .then(respArr => {
    respArr.forEach(r => console.log(r));
  });
