PicoTTS for Node
============

PicoTTS wrapper for NodeJS. PicoTTS is being used by Android and it's extremely lightweight and fast yet produces very natural voices.

## Usage

```javascript

var pico = require('picotts')

pico.say('Hey this is cool', 'en-US', function(err) {
  if (!err)
	  console.log('Correctly played')
})

```
