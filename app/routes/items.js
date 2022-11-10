const express=require('express')
const router= express.Router()
const {getItems,getItemsById,postItems,putItems,deleteItems}=require('../controllers/items')
const checkOrigin = require('../middlewares/origin')


router.get('/',checkOrigin,getItems)

router.get('/:id',checkOrigin,getItemsById)

router.post('/',checkOrigin,postItems)

router.patch('/:id',checkOrigin,putItems)

router.delete('/:id',checkOrigin,deleteItems)


module.exports=router