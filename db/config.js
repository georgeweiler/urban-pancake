const mongoose = require('mongoose');

let secretKeys = null;
if (!process.env.MONGOOSE_URI) {
  secretKeys = require('../env/config');
}

mongoose.connect(process.env.MONGOOSE_URI || secretKeys.MONGOOSE_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('in DB');
});


module.exports = db;
