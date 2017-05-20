const net = require('net');
const strf = require('strftime');

const server = net.createServer(c => {
  c.end(strf('%F %R', new Date()) + '\n');
});
server.listen(process.argv[2]);