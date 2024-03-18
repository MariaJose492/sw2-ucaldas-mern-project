const userModel = require('../models/user_model');
const createUser = async(req, res) => {try {
    const{
        user_name,
        last_name, 
        nationality, 
        document,
        user_email,
        password,
        user_active

    } = req.body;
    console.log(req.body);
} catch (error) {
    
}};
const lsitUser = async(req, res) => {try {
    
} catch (error) {
    
}};
const getUser = async(req, res) => {try {
    
} catch (error) {
    
}};
const editUser = async(req, res) => {try {
    
} catch (error) {
    
}};
const deleteUser = async(req, res) => {try {
    
} catch (error) {
    
}};

module.exports = {
    createUser,
    lsitUser,
    getUser,
    editUser,
    deleteUser
}