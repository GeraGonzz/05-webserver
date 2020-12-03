const http = require("http");
const puerto = 8080;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let salida = {
      nombre: "Gerardo",
      edad: 33,
      url: req.url,
      page: "fibonappi.com",
    };

    // res.write("Hola Mundo");
    res.write(JSON.stringify(salida));
    res.end();
  })
  .listen(puerto);

console.log(`Escuchando el puerto ${puerto}`);
