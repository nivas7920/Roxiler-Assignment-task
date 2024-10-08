const mongoose = require('mongoose');

const mongoConnect = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected Successfully !');
  })
  .catch((err) => {
    console.log('Error while connecting to MongoDB !', err);
  });
};

module.exports = mongoConnect;
