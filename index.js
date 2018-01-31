// Import dgram package.
const dgram = require('dgram');

// Create socket to send messages through.
const socket = dgram.createSocket('udp4');

// CueServer Info
// Read from CueServer menu.
const CUESERVER_IP = '169.254.80.104';
const CUESERVER_PORT = 52737;

// ASCII messages based
// on CueServer's protocol.
const CUE_1 = 'Cue 1 Go'; // Or 'Q1G'
const CUE_2 = 'Cue 2 Go'; // Or 'Q2G'

// Send messages to CueServer over
// ethernet. The CueServer should
// already be programmed to do
// something with these messages.
function toCueServer(message) {

  console.log('toCueServer[ ' + message + ' ]');

  socket.send(message, 0, message.length, CUESERVER_PORT, CUESERVER_IP, (err) => {

    // CueServer callback
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

