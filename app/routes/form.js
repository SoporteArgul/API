const express=require('express')
const { createForm, getForm, getFormById } = require('../controllers/form')
const checkAuth = require('../middlewares/auth')
const checkOrigin = require('../middlewares/origin')
const checkRoleAuth = require('../middlewares/roleAuth')
const router= express.Router()


router.post('/',createForm)
router.get('/',checkAuth,checkRoleAuth(['ADMINS']),getForm)
router.get('/',checkAuth,checkRoleAuth(['ADMINS']),getFormById)

module.exports=router