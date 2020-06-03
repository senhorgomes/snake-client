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
  return conn;
};

module.exports = connect;