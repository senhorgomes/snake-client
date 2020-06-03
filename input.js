//Setup user interface to handle input
let connection;

const setupInput = function(conn) {
  connection = conn;
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
      //setInterval(() => {
        conn.write("Move: up");
      //}, 500)
    }
    if (key === 's') {
      //setInterval(() => {
        conn.write("Move: down");
      //}, 500)
    }
    if (key === 'a') {
      //setInterval(() => {
        conn.write("Move: left");
      //}, 500)
    }
    if (key === 'd') {
      //setInterval(() => {
        conn.write("Move: right");
      //}, 500)
    }
    if (key === 't') {
      conn.write("Hey!");
    }
    if (key === 'y') {
      conn.write("Nice moves!");
    }
    if (key === 'u') {
      conn.write("Gotcha!");
    }
    if (key === 'i') {
      conn.write("Oh no!");
    }
  })
  return stdin;
};
module.exports = setupInput