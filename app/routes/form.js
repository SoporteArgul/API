const express=require('express')
const { createForm, getForm, getFormById } = require('../controllers/form')
const checkAuth = require('../middlewares/auth')
const checkOrigin = require('../middlewares/origin')
const checkRoleAuth = require('../middlewares/roleAuth')
const router= express.Router()


router.post('/',checkAuth,checkRoleAuth(['ADMINS','Tecnicos']),createForm)
router.get('/',checkAuth,checkRoleAuth(['ADMINS','Tecnicos']),getForm)
router.get('/',checkAuth,checkRoleAuth(['ADMINS','Tecnicos']),getFormById)

module.exports=router