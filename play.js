const connect = require('./client');

console.log('Connecting ...');

connect();

//Setup user interface to handle input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = () => {
    if (key === '\u0003') {
      process.exit();
    }
  };
  return stdin;
};