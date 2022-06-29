const express = require("express");
const classContenedor = require("./classContenedor");

const file1 = new classContenedor("productos.txt");

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.send("Ingresa a /productos o /productoRandom");
});

app.get("/productos", async (req, res) => {
  const arrayProductos = await file1.getAll();

  res.send(arrayProductos);
});

app.get("/productoRandom", async (req, res) => {
  const arrayProductos = await file1.getAll();

  res.send(arrayProductos[Math.floor(Math.random() * arrayProductos.length)]);
});
