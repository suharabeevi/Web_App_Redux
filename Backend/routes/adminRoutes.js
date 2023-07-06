const express = require('express');
const { registerAdmin, authAdmin, getUsers, addUser, getSingleUser, editUser, deleteUser } = require('../controllers/adminControllers');
//const { editUser } = require('../../Frontend/src/apiCalls/admin');
const router = express.Router()

router.route('/').post(registerAdmin);
router.route('/login').post(authAdmin);
// router.route('/:id').get().put().delete();
router.get('/allUsers', getUsers);
router.post('/addUsers', addUser);
router.get('/:id', getSingleUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;