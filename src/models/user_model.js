const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {type: "String", require: true, unique: true},
    lastname: {type: "String", require: true, unique: true},
    nationality: {type: "String", require: true, unique: true},
    document: {type: "String", require: true, unique: true},
    user_email: {type: "String", require: true, unique: true},
    password: {type: "String", require: true},
    user_active: {type: "boolean", require: true, default: false}
});

// En la exportación mongoose crea un modelo cuya colección en la 
// base de datos se llamará "Userr" y tendrá la estructura definida
// en el modelo "userSchema"
module.exports = mongoose.model("User", userSchema);
