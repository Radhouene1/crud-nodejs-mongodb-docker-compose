const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');

console.log(dbConfig.url)

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require('./employee.model');