require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const mapas = require('./database/mapas')

app.get('/getLatLngs', mapas.getLatLngs);
app.get('/savePoint/:latlng',mapas.savePoint);

app.listen(process.env.PORT, () => { 
  console.log(`Server listening on port ${process.env.PORT}`); 
});