const express=require('express')
const { verifyUser } = require('../controllers/confirmcode')
const router= express.Router()



router.get('/:confirmationCode',verifyUser)


module.exports=router