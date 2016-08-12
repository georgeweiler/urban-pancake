const axios = require('axios');

let secretKeys = null;
if(!process.env['MONGOOSE_URI']) {
  secretKeys = require('../env/config');
}
const GMAP_API_KEY = secretKeys ? secretKeys.GMAP_API_KEY : process.env['GMAP_API_KEY'];

module.exports = {};
module.exports.geoCoder = (newTruckObj) => {
  return new Promise(function(resolve, reject) {
    let query = newTruckObj.getLocationResults.address || newTruckObj.getLocationResults.poi;
    let gMapUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GMAP_API_KEY}`;
    axios.get(gMapUrl)
    .then(function(response) {
      newTruckObj.geoInfo = response.data.results[0].geometry.location;
      resolve(newTruckObj);
    })
    .catch(function(error) {
      if(error){
        reject(error);
      }
    });
  });
};
