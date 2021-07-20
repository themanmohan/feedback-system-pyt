import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
Link,
  useHistory,
  useLocation
} from 'react-router-dom';
const Navbar =()=>{
    const dispatch = useDispatch();
    const location=useLocation()
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    //checking admin
    const admin=user?.result.email==="kmanmohan030@gmail.com"
     const logout = () => {
    //dispatcing  for login
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };

    useEffect(() => {
    //storing user profile in localstoragge
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
    return(
     
  
   
    <nav className = "navbar navbar-expand-lg navbar-light bg-primary fixed-top" >
        <button className="btn btn-primary" style={{fontSize:'30px'}}>&nbsp; &nbsp;&nbsp;PYT</button>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse ml-3" id="navbarSupportedContent" style={{zIndex:'1'}}>
    <ul className="navbar-nav mr-auto" style={{display:'flex',justifyContent:'flex-end'}}>
     <li><button className="btn btn-primary" style={{fontSize:'20px'}}>{user?.result.name}</button></li>
      <li className="nav-item active">
     {admin?<Link className="nav-link" style={{color:'white',paddingTop:'10px'}} to="/feedback">AdminDashBoard</Link>:''}
      </li>
      
      <li className = "nav-item active"  >
          {user?<Link className="nav-link " style={{color:'white',paddingTop:'10px'}} to="/feedbackuser">FeedBack</Link>:''}
      </li>
      <li  className = "nav-item active" >
          {user?<Link className="nav-link" style={{color:'white',paddingTop:'10px'}} to="/feedbackform">Add FeedBack</Link>:''}
      </li>
       <li  className = "nav-item active" >
         {user?<button className="btn btn-primary " onClick={logout}>LOGOUT</button>:''}&nbsp; &nbsp;&nbsp;
      </li>
     
    </ul>
  </div>
</nav>
    )
}
export default Navbar
