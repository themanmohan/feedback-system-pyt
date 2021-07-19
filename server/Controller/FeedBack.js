
const FeedBack=require('../Model/FeedBack')
 const  getFeedBack = async (req, res) => {
    try {

        const feedback = await FeedBack.find()

        res.status(200).json(feedback)
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}




const createFeedBack = async (req, res) => {
    try {
        console.log(req.body)
        const feedback = await FeedBack.create(req.body)
        console.log(feedback)
        res.status(200).json(feedback)
    } catch (error) {
        res.status(200).json({
            message: error.message
        })
    }
}



module.exports={
    createFeedBack,
    getFeedBack
}