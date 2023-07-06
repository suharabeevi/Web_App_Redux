const asyncHandler = require('express-async-handler')
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');
const cloudinary = require('../utils/cloudinary');

const registerUser = asyncHandler (async (req,res) => {
    const { name, email, password, pic } = req.body;
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400);
        throw new Error("User Already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }else{
        res.status(400);
        throw new Error('Error occur');
    }
});


const authUser = asyncHandler (async (req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else{
        res.status(400);
        throw new Error('Invalid Email or Password');
    }
});

const updateUserProfile = asyncHandler (async (req,res) => {
    console.log(req.params.id);
    const user = await User.findById(req.params.id);
    console.log(user);
    console.log(req.body.name);  

    if( user ) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: {name:user.name,email:user.email }});

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
           // pic: updatedUser.pic,
            token: generateToken(updatedUser._id),
        });
    }else{
        res.status(404)
        throw new Error("User not found");
    }
});


const updateProfilePic = asyncHandler(async(req,res) => {
    try {
        let result = await cloudinary.uploader.upload(req.file.path)
        const filter = { _id: req.body?.userInfo?._id};
        const update = { profilePic: result.url};
        const doc = await User.findByIdAndUpdate(filter, update, { new: true });
        res.json({ success: true})
    } catch (error) {
        res.json({ error: "Failed to upload the image"});
    }
})

const updateProfile = (req,res) => {
    try {
        const { name, email } = req.body;
        User.updateOne(
            {_id: req.body._id},
            { $set: { name: name, email:email}}
        )
        .then(result => {
            res.json({ success:true, message: 'Document updated successfully', data: name})
        })
        .catch (error => {
            res.json({ success: false, message: "error updating document"})
        })
    } catch (error) {
        console.log(error);
    }
}

const getProfileData = async(req, res) => {
    try {
        console.log(req.body)
        const user = await User.findById(req.body.user._id)
        res.json({ success: true, data: user })
    } catch (error) {
        res.json({ success: false, message: "Data fetching error" })
    }
}




// const editUser = async (req, res) => {
//     let user = req.body;
//     const editUser = new User(user);
//     try {
//         await User.updateOne({ _id: req.params.id}, editUser);
//         response.status(201).json(editUser);
//     } catch (error) {
//         res.status(409).json({ message: error.message});  
//     }
// }

const findUser = async(req,res)=>{
    const userId = req.params.id
    const userData=await User.findById(userId)
    if(userData){
        res.json({
            status:"success",
            userData
        })

    }else{
        res.json({
            status:"failed"
        })
    }
}

const setProfilePic = async (req,res) => {
    console.log(req.params.id);
    if(!req.file){
        return res.status(401).json({
            status:"failed",
            message:'please upload your image before submit'
        })
    }
    try{
     const {url}= await cloudinary.uploader.upload(req.file.path)
      await User.findByIdAndUpdate(req.params.id,{$set:{pic:url}})
      res.json({
        status:"success",
        message:"profile picture updated",
      })

    }catch(err){
        console.log(err);
    }
}

module.exports = { registerUser, authUser, updateUserProfile, updateProfilePic, updateProfile, getProfileData,findUser, setProfilePic };