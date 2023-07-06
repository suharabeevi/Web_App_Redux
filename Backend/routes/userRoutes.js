const express = require('express');
const { registerUser, authUser, updateUserProfile , getProfileData,findUser, setProfilePic} = require('../controllers/userControllers');
const { protect} = require('../middlewares/authMiddleware');
const router = express.Router();
const upload = require('../utils/multer')



router.route('/').post(registerUser);
router.route('/login').post(authUser);
//router.route('/profile').post(protect, updateUserProfile)
router.route('/profile').get(getProfileData)
router.route('/update-profile/:id').put(updateUserProfile)
router.route('/finduser/:id').get(findUser)
router.post('/set-profile-pic/:id', upload.single('image'), setProfilePic);


module.exports = router;