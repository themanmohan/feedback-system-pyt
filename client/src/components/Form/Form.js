import React,{useState} from 'react'
import './style.css'
import { createFeedBack } from '../../Actions/feedback';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
      import {
            useHistory
      } from "react-router-dom";
const Form =()=>{
       const posts = useSelector((state => state.FeedBack))
     
      const history = useHistory()
      const dispatch = useDispatch()

     const [feedBack,setFeedBack]=useState({name:'',email:'',feedback:''})
     const handleSubmit=(e)=>{
           e.preventDefault()
             dispatch(createFeedBack(feedBack));
             setFeedBack({email:'',feedback:'',name:''})
             history.push("/feedbackuser")
     }
    return(
       <div class="container">
        <div class="row">
            <div class="col-sm-5 col-md-8 col-12 pb-4 offset-md-2 mt-5" >
                           <form form id = "algin-form"
                           onSubmit = {
                                 handleSubmit
                           } >
                           <h4 className="p-2">Please Leave Review for pyt</h4>
                                   <div className="form-group mt-1">
                                     <label htmlFor="email">Name</label>
                                   <input type="text" className="form-control" placeholder="Enter Nmae" onChange={(e)=>setFeedBack({...feedBack,name:e.target.value})} />
                                   </div>
                                   <div className="form-group mt-1">
                                     <label htmlFor="email">Email address</label>
                                   <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setFeedBack({...feedBack,email:e.target.value})} />
                                   </div>
                                   <div className="form-group mt-2">
                                     <label htmlFor="feedback">FeedBack</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setFeedBack({...feedBack,feedback:e.target.value})}></textarea>
                                   </div>
                                   <button type="submit" className="btn btn-primary mt-3">Submit</button>
                           </form>
                       </div>
                    </div>
              </div>
          
    )
}
export default Form
