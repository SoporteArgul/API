const express = require('express')
const router = express.Router()
const checkOrigin = require('../middlewares/origin')
const checkAuth = require('../middlewares/auth')
const checkRoleAuth = require('../middlewares/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/users')
const { validateCreate } = require('../validators/users')

router.get('/', checkAuth, checkRoleAuth(['admin']), getItems)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)


module.exports = router