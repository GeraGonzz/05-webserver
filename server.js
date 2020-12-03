const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");
const puerto = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get("/", function (req, res) {
//   let salida = {
//     nombre: "Gerardo",
//     edad: 33,
//     url: req.url,
//     page: "fibonappi.com",
//   };
//   res.send(salida);
    res.render('home',{
        nombre: "geraRDo gonZáleZ",
        // anio: new Date().getFullYear(),
    });
});
app.get("/about", function (req, res) {
      res.render('about');
  });

app.listen(puerto, () => {
  console.log(`Escuchando peticiones en el puerto ${puerto}`);
});
