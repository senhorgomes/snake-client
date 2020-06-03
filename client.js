const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: "135.23.222.148",
    port: 50541
  });
  //Interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: BPG');
  });
  return conn;
};

module.exports = connect;