const express = require('express')
const router = express.Router()
const checkOrigin = require('../middlewares/origin')
const checkAuth = require('../middlewares/auth')
const checkRoleAuth = require('../middlewares/roleAuth')
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/users')
const { validateCreate } = require('../validators/users')



router.get('/', checkAuth, getItems)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)

router.put('/:id',updateItem)

router.delete('/:id',deleteItem)

module.exports = router