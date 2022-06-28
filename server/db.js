// 

const mongoose = require('mongoose');

// connection to database
module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB, connectionParams);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Could not connect to DB");
  }
};


