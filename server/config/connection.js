const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGDB_URI || 'mongodb://0.0.0.0:27017/MERNhw',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);


module.exports = mongoose.connection;
