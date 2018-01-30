const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const CUESERVER_IP = '192.168.1.234';
const CUESERVER_PORT = 52737;

// ASCII Message based
// on CueServer's protocol.
const CUE_1 = 'Cue 1 Go';
const CUE_2 = 'Cue 2 Go';

server.on('error', (err) => {
  console.log(`server error:
${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

function toCueServer(message) {

  console.log('toCueServer[' + message + '] - - - - >');

  server.send(message, 0, message.length, CUESERVER_PORT, CUESERVER_IP, (err) => {

    // Cuserver returned
    console.log('cueserver returned < - - - -');
    console.log(err);

  });

}

// Send messages to Cueserver over
// ethernet. The Cueserver should
// already be programmed to do
// something with these messages.

// Trigger cue 1
// immediately
toCueServer(CUE_1);

// After 15 secs,
// trigger cue 2.
setTimeout(() => {
  toCueServer(CUE_2);
}, 15000);
