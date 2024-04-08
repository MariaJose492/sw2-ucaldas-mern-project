const userModel = require("../models/user_model");

const createUser = async (req, res) => {
    try {
        const {
            user_name,
            lastname,
            nationality,
            document,
            user_email,
            password,
            user_active,
        } = req.body;

        const avatar = req.file ? req.file.filename : null;
        console.log(avatar);
        
        const newUser = await userModel.create({
            user_name,
            lastname,
            nationality,
            document,
            user_email,
            password,
            user_active,
            avatar
        });
        console.log(req.body);
        console.log(newUser);
    } catch (error) { }
};


const listUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: error.message })

    }

};
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await userModel.findById(id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            user_name,
            lastname,
            nationality,
            document,
            user_email,
            password,
            user_active,
        } = req.body;

        const userEdit = {};
        // Se puede hacer así o de la forma que se verificó en el create
        if(req.file) userEdit.avatar = req.file.filename; 
        userEdit.user_name = user_name;
        userEdit.lastname = lastname;
        userEdit.nationality = nationality;
        userEdit.document = document;
        userEdit.user_email = user_email;
        userEdit.password = password;
        userEdit.user_active = user_active;

        const user = await userModel.findByIdAndUpdate(
            id, user)
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await userModel.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    listUsers,
    getUser,
    editUser,
    deleteUser,
};