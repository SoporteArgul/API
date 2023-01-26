const express = require('express')
const router = express.Router()
const checkOrigin = require('../middlewares/origin')
const checkAuth = require('../middlewares/auth')
const checkRoleAuth = require('../middlewares/roleAuth')
const { getItems, createItem, updateItem } = require('../controllers/users')
const { validateCreate } = require('../validators/users')



router.get('/', checkAuth, checkRoleAuth(['ADMINS']), getItems)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)

router.put('/:id',checkAuth, checkRoleAuth(['ADMINS']),updateItem)


module.exports = router