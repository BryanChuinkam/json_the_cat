const request = require('request');

const breedFetcher = (breed) => {
  const apiEndPoint = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(apiEndPoint, function(error, response, body) {
    if (error) {
      console.log(`The follwoing error occured: ${error}`);

    } else {
      const data = JSON.parse(body);
      if (data.length <= 0) {
        console.log(`The breed: '${breed}' was not found.`);
  
      } else {
        console.log(`${breed} description: `, data[0]["description"]);
      }
    }

  });

};

breedFetcher(process.argv.slice(2));