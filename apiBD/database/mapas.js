const pool = require('./pool');

const savePoint = (request, response) => {
    const coordenada = request.params.latlng;
    console.log(coordenada)
    pool.query(`INSERT INTO pontos (latlng) VALUES (ST_MakePoint(${coordenada}))`)
  };
  
  const getLatLngs = (request, response) => {
    pool.query('SELECT ST_AsText(latlng) pontos FROM pontos', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  };

module.exports = {savePoint, getLatLngs};