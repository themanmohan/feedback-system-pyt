import React from 'react'
import FeedBack from '../components/FeedBackDisplay/Feedback'
import {useSelector} from 'react-redux'
const FeedBacks =()=>{
    const posts = useSelector((state => state.FeedBack))
    if(!posts){
        return "...loading"
    }
    return(
           <div className="container">
              <div className="row">
              <div className = "col-sm-5 col-md-10 col-12 pb-4 offset-md-1 " >
                  <h1>All Feedback of PYT</h1>
                 {
                     posts.map((feedback)=>{
                         return (
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
