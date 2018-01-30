const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const CUESERVER_IP = '169.254.80.104';
const CUESERVER_PORT = 52737;

// ASCII Message based
// on CueServer's protocol.
const CUE_1 = 'Cue 1 Go'; // Or 'Q1G'
const CUE_2 = 'Cue 2 Go'; // Or 'Q2G'

// Send messages to Cueserver over
// ethernet. The Cueserver should
// already be programmed to do
// something with these messages.
function toCueServer(message) {

  console.log('toCueServer[ ' + message + ' ]');

  server.send(message, 0, message.length, CUESERVER_PORT, CUESERVER_IP, (err) => {

    // Cuserver callback
    if (err) {
      console.log(err);
    }

  });

}

// Trigger Cue 1
// immediately.
toCueServer(CUE_1);

// After 10 secs,
// trigger Cue 2.
setTimeout(() => {

  toCueServer(CUE_2);

}, 10000);
