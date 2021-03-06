'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`API RESTful corriendo en http://0.0.0.0:${port}`);
});
