const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiEndPoint = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiEndPoint, function(error, response, body) {
    let description = null;
    if (!error) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        description = data[0]["description"];
      }

    }
    callback(error, description);
  });
};




module.exports = { fetchBreedDescription };

