const express = require('express');
const router = express.Router();
const {fetchAllUsers,fetchUserById,registerUser,updateUserById,deleteUserById} = require('../controllers/user.controller')

//Urls
router.get('/all_users',fetchAllUsers);
router.get('/get_user_by_id/:id',fetchUserById);
router.post('/register/',registerUser);
router.put('/update/:id',updateUserById);
router.delete('/delete/:id',deleteUserById);

module.exports = router