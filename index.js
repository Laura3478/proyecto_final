const express = require('express');
const app = express();

app.get("/", (res, req, next) => {
    res.setEncoding("Bienvenido");
});

app.listen( process.env.PORT ||  3000, () => {
    console.log("Server is running...")
});