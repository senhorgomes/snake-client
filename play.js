const connect = require('./client');

console.log('Connecting ...');

connect();
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};
//Setup user interface to handle input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();Is
  return stdin;
};

const input = setupInput()
input.on("data", handleUserInput)