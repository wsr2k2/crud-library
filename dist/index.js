"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const obras_routes_1 = require("./src/routers/obras.routes");
const app = express();
app.use(express.json());
const port = 3456;
app.get('/', (req, res) => {
    res.status(200).json("Aplicacao rodando");
});
app.use("/", obras_routes_1.default);
app.listen(port);
console.log(`Aplicacao rodando em: http://localhost:${port}`);
