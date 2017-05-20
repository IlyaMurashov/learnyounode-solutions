const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const urlObject = url.parse(req.url, true);

  if (urlObject.pathname === '/api/parsetime') {
    try {
      const isoString = urlObject.query.iso;
      const parsedDate = new Date(isoString);

      const responseJSON = {
        hour: parsedDate.getHours(),
        minute: parsedDate.getMinutes(),
        second: parsedDate.getSeconds()
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseJSON));
    }
    catch (e) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Wrong API usage. Example: /api/parsetime?iso=2013-08-10T12:10:15.474Z');
    }
  }
  else if (urlObject.pathname === '/api/unixtime') {
    try {
      const isoString = urlObject.query.iso;
      const parsedDate = new Date(isoString);

      const responseJSON = {
        unixtime: parsedDate.getTime()
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(responseJSON));
    }
    catch (e) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Wrong API usage. Example: /api/unixtime?iso=2013-08-10T12:10:15.474Z');
    }
  }
  else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Wrong API usage. Example: /api/[unixtime OR parsetime]?iso=2013-08-10T12:10:15.474Z');
  }
}).listen(process.argv[2]);