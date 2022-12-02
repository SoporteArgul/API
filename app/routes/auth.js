const express=require('express')
const router= express.Router()
const {loginCtrl,registerCtrl}=require('../controllers/auth')
const checkOrigin = require('../middlewares/origin')


router.post('/login',loginCtrl)

router.post('/register',registerCtrl)




module.exports=router