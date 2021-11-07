const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIp((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:" , ip);
// });

// fetchCoordsByIP('162.245.144.188', (error, coords) => {
//   if(error) {
//     console.log("Error", error);
//     return;
//   }

//   console.log("It worked", coords);
// });

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, flyOverTimes) => {
  if (error) {
    console.log("Error", error);
    return;
  }

  console.log("flyOvertimes are", flyOverTimes);
});