import React from 'react'
import moment from 'moment';
import './style.css'
const FeedBack =({feedback})=>{
    return(
        // display feedback for admin
            <div className="comment mt-4 text-justify float-left"> 
                <h4>{feedback.name}</h4> <span>- {moment(feedback.date).format("Y/MM/DD")}</span> <br />
                <h4>{feedback.email}</h4>
                <p>{feedback.feedback}</p>
            </div>
    )
}
export default FeedBack
