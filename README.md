# node-cueserver
Simple example controlling cue server from node application.


### Getting started
  - Connect CueServer to computer by ethernet. 
  - In CueServer's Network menu, ensure DHCP is set to `On`.
  - Copy down IP address displayed on CueServer. 
  - Access admin screen from computer by pointing browser to this IP address.
  - Update IP address in `index.js` to match.
  - Run `node install`
  - Run `node index`


The CueServer listens from incoming UDP packets on port **52737**. The CueServer expects the messages in simple ASCII text format.

The most common command you will need is `Cue <Cue Number> Go`, which triggers preset Cues on the CueServer.

[Full CueScript Protocol](http://docs.interactive-online.com/cs2/1.0/en/topic/cuescript-protocol)

[CueServerAdmin](http://interactive-online.com/component/rsfiles/files?folder=CueServer%2FSoftware%2FCueServer+Admin) Can be helpful for troublehsooting connection to CueServer.


