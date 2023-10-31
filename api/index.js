const express = require("express");
const cors = require("cors");
const Documentales = require('./controllers/documental.controller.js');

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "API Plataforma Streaming" });
});

// faltan las rutas
app.get("/documentales",Documentales.list);

// set port, listen for requests
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});