//Setup user interface to handle input
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //intergrated handleUserInput into setupInput
  const handleUserInput = stdin.on("data", (key) => {
    //Checks if key is ctrl + c and logs it out.
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      console.log("up")
    }
    if (key === 's') {
      console.log("down")
    }
    if (key === 'a') {
      console.log("left")
    }
    if (key === 'd') {
      console.log("right")
    }
  })
  return stdin;
};
module.exports = setupInput