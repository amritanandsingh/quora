const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controller');

router.get('/profile',userController.user);
router.get('/sign-Up',userController.signUp);
router.get('/sign-In',userController.signIn);

router.post('/create',userController.create);
router.post('/create-session',userController.createSession);

module.exports=router;

