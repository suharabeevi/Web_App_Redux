
const cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv')
dotenv.config()

console.log( process.env.CLOUDINARY_API_KEY);
cloudinary.config ({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = cloudinary;