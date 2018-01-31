# node-cueserver
Simple example controlling cue server from node application.


### Getting started
  - This assumes you already have a CueServer set up with two Cues (1 and 2).
  - Connect ethernet cable from computer to CueServer.
  - Read IP address from the CueServer menu.
  - Update IP address in `index.js` to match.


The CueServer listens form incoming UDP packets on port **52737**. The CueServer expects the messages in simple ASCII text format.

The most common command you will need is `Cue <Cue Number> Go`, which triggers preset Cues on the CueServer.

[Full CueScript Protocol](http://docs.interactive-online.com/cs2/1.0/en/topic/cuescript-protocol)


