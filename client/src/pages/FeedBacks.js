import React from 'react'
import FeedBack from '../components/FeedBackDisplay/Feedback'
import {useSelector} from 'react-redux'
const FeedBacks =()=>{
    //fetching data from backend using redux
    const posts = useSelector((state => state.FeedBack))
    
    //return loding post not found
    if(!posts){
        return "...loading"
    }
    return(
        <div className="container">
            <div className="row">
                <div  className = "col-sm-5 col-md-10 col-12 pb-4 offset-md-1 mt-5" >
                   <h1 className=" mt-5 text-center mt-2">All Feedback of PYT</h1>
                    {
                        posts.map((feedback)=>{
                            return (
                             //sending props to feedback display pages
                             <FeedBack feedback={feedback} key={feedback._id}/>               
                            ) 
                        }) 
                    }
                </div>
            </div>
        </div>
    )
}
export default FeedBacks
