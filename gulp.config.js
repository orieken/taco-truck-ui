module.exports = function() {
  var client = './src/client/';
  var server = './src/server/';
  var clientApp = client + 'app/';
  var temp = './.tmp/';

  var config = {
    temp: temp,
    // All Js files to vet
    allJs: [
      './public/javascripts/*.js'
    ],
    setUp: {
      createModule: false,
      constants: {
        tacoTruckApiUrl: process.env.TACO_TRUCK_API_URL
      }
    }
  };

  return config;
};
