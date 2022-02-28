const express = require("express");
const path = require("path");
const app = express();
const { writeFileSync } = require("fs");
const router = require('./routes/electeur')
app.use(express.static("./public"));
app.use(express.json());
app.use('/electeur', router);
app.use('/recherche-electeur', router)
app.listen(1994);
