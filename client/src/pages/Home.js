import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login'

const   Home =()=>{
       const dispatch = useDispatch();
       const history = useHistory();
       const googleSuccess=async(res)=>{
       const result = res?.profileObj;
       const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      history.push('/feedbackform');
    } catch (error) {
      console.log(error);
    }
}
const googleFailure = (error) => {
   console.log(error)
}
    return(
      <div className="container">
         <div className="row">
            <div  className = "col-md-3 offset-md-3 offset-sm-3" >
                <div className="card" style={{height:'100px',width:'300px'}}>
               <div className="card-body" style={{margin:'0 auto'}} >
           <GoogleLogin 
             clientId = "621341383182-2op9iqlfobh8qpthemo759poapevri6e.apps.googleusercontent.com"
             render={(renderProps)=>{
               return  <button className="btn btn-success" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Sign</button>
             }}
             onSuccess={googleSuccess}
             onFailure={googleFailure}
             cookiePolicy="single_host_origin"
         />
        </div>
      </div>
            </div>
         </div>
      </div>
      
    )
}
export default Home
