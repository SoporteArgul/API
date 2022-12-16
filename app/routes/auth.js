const express=require('express')
const router= express.Router()
const {loginCtrl,registerCtrl}=require('../controllers/auth')
const checkOrigin = require('../middlewares/origin')
const { body, validationResult } = require('express-validator');
const { validateCreate } = require('../validators/users');


router.post('/login',loginCtrl)

router.post('/register',validateCreate,registerCtrl)




module.exports=router