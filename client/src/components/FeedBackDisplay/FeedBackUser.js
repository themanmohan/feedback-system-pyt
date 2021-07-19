import React from 'react'
import moment from 'moment';
import './style.css'
  import {useSelector} from 'react-redux'
const FeedBackUser =()=>{
    const posts = useSelector((state => state.FeedBack))
  
    if (!posts) {
        return "...loading"
    }

    return(
            
       <div className="container">
              <div className="row">
              <div className = "col-sm-5 col-md-10 col-12 pb-4 offset-md-1 " >
                  <h1>User Feedback for PYT</h1>
                 {
                     posts.slice(2).map((feedback)=>{
                         return (
                    <div className="comment mt-4 text-justify float-left"> 
                    <h4>{feedback.name}</h4> <span>- {moment(feedback.createdAt).fromNow()}</span> <br />
                    <p>{feedback.feedback}</p>
                 </div>      
                       )     
                     })
                     
                 }
                </div>
                 </div>
              </div>
    )
}
export default FeedBackUser

