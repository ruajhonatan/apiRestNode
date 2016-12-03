'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(8000, () => {
    console.log("API RESTful corriento en http://0.0.0.0:8000");
});
