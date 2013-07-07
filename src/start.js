/**
* Schedule.js 0.1.0
* (c) 2013 Bill, BunKat LLC.
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://bunkat.github.com/later
*/
schedule = (function() {
  var schedule = {version: "0.6.0"}; // semver

  var later = !later && require ? require('later') : later;

  if(!later) throw new Error('Schedule.js requires Later.js.');