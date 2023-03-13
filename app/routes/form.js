const express=require('express')
const { createForm, getForm, getFormById, getFilter, updateForm } = require('../controllers/form')
const checkAuth = require('../middlewares/auth')
const checkOrigin = require('../middlewares/origin')
const checkRoleAuth = require('../middlewares/roleAuth')
const router= express.Router()
const multer=require('multer')
const {Storage}=require('../helpers/Image')
const upload=multer({storage:Storage})

router.post('/',upload.single('image'),createForm)
router.get('/',checkAuth,checkRoleAuth(['ADMINS','Tecnicos']),getForm)
router.get('/:id',getFormById)
router.get('/busqueda/v2',getFilter)
router.put('/actualizar/:id',updateForm)

module.exports=router