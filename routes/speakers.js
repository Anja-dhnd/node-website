const express = require('express');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    // response.sendFile(path.join(__dirname, './static/index.html'));
    return response.send('Spealers list');
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
