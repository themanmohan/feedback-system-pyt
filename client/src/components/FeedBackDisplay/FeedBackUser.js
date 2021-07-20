import React,{useEffect} from 'react'
import moment from 'moment';
import './style.css'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {getFeedBack} from '../../Actions/feedback'
const FeedBackUser =()=>{

        //fetching data
        const posts = useSelector((state => state.FeedBack))
    //fetching data from backend

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeedBack());
    }, [dispatch,posts]);
     


    if (!posts) {
        return "...loading"
    }
   
    return(
        //display feedback for user
       <div className="container">
            <div className="row">
              <div  className = "col-sm-5 col-md-10 col-12 pb-4 offset-md-1 mt-5" >
                  <h1 className="mt-5 text-center">Thank you for Valuable Feedback for PYT</h1>
                  {
                      //iterating over array
                     posts.slice(-3).map((feedback)=>{
                         return (
                      <div className="comment mt-4 text-justify float-left"> 
                          <h4>{feedback.name}</h4> <span>- {moment(feedback.date).format("Y/MM/DD")}</span> <br />
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

