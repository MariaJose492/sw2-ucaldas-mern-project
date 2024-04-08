const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: { type: "string", require: true },
  description: { type: "string", require: true },
  release_date: { type: "string", require: true },
  genre: { type: "array", require: true, unique: true },
  director: { type: "string", require: true, unique: true },
  cast: { type: "array", require: true },
  duration: { type: "array", require: true, default: false },
  rating: {type: "string", require: false},
  language,
  poster,
  trailer,
  production_company,
  country:{}
});

// En la exportación, mongoose crea un modelo cuya colección en la base de datos
//se llamará "User" y tendrá la estructura definida en el esquema "userSchema"
module.exports = mongoose.model("UserCollection", userSchema);