const express =require('express')
const FeedBack= require('../Controller/FeedBack')
const router = express.Router()


router.get('/', FeedBack.getFeedBack)
router.post('/', FeedBack.createFeedBack)


module.exports= router