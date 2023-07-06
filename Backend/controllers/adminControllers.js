const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const { response, request } = require('express');

const registerAdmin = asyncHandler (async (req,res) => {
    const { email, password } = req.body;
    const adminExists = await Admin.findOne({email});

    if(adminExists) {
        res.status(400);
        throw new Error("Admin Already exists");
    }

    const admin = await Admin.create({
        email,
        password,
    });

    if(admin) {
        res.status(201).json({
            _id: admin._id,
            email: admin.email,
            isAdmin: admin.isAdmin,
            token: generateToken(admin._id),
        });
    }else{
        res.status(400);
        throw new Error('Error occur');
    }
});


const authAdmin = asyncHandler (async (req,res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if(admin && (await admin.matchPassword(password))) {
    //  if(admin && (await admin.password === password)){
        res.json({
            _id: admin._id,
            email: admin.email,
            isAdmin: admin.isAdmin,
            token: generateToken(admin._id),
        })
        
    } else{
        res.status(400);
        throw new Error('Invalid Email or Password');
    }
});

const getUsers = async (req,res) => {
    try {
        const  users = await User.find({});
        //localStorage.setItem('Users',JSON.stringify(users))
        res.status(200).json(users);
       

    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

const addUser =  async(req,res) => {
    const user =  req.body;
    const newUser = new User(user)
    console.log(newUser, "77777777777777");
    try {
        const response =  await newUser.save();
        console.log(response);

        res.status(201).json(newUser)
        // console.log("wwwwwwwwww",user);
       
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

const getSingleUser = async (req,res) => {
    // console.log(req.params.id);
    try {
        // const  user = await User.find({_id: req.params.id});
        const user = await User.findById(req.params.id);
        //localStorage.setItem('Users',JSON.stringify(users))
        res.status(200).json(user);
       

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const editUser = async (req, res) => {
    let user = req.body;
    const editUser = new User(user);
    try {
        await User.updateOne({ _id: req.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error) {
        res.status(409).json({ message: error.message});  
    }
}

const deleteUser = async (req,res) => {
    try {
        await User.deleteOne({ _id: req.params.id});
        res.status(200).json({ message: "User deleted successfully"})
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}


module.exports = { registerAdmin, authAdmin, getUsers, addUser, getSingleUser, editUser, deleteUser };