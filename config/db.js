const mongoose = require('mongoose');
require('dotenv').config()

const MONGO_URL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_DBPASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DNAME}`;


mongoose
  .connect(MONGO_URL, { useNewUrlParser: false, useUnifiedTopology: false })
  .then(() => console.log('La connexio à base de données MongoDB est établie'))
  .catch(err =>
    console.log(
      `Erreur lors de la connexion à la base de données à de \n${err}`
    )
  );

module.exports = mongoose;

