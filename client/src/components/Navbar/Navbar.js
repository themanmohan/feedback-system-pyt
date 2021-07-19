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
    const admin=user?.result.email==="kmanmohan030@gmail.com"
     const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  };

    useEffect(() => {
    // const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
    return(
     
  
   
    <nav  class = "navbar navbar-expand-lg navbar-light bg-primary navbar-fixed-top" >
  <a class="navbar-brand" href="#">FeedBack System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto" style={{display:'flex',justifyContent:'space-between'}}>
      <li class="nav-item active">
     {admin?<Link class="nav-link" to="/feedback">AdminDashBoard</Link>:<Link class="nav-link" to="/feedbackuser">FeedBack</Link>}
      </li>
      <li  class = "nav-item active" >
         {user?<button className="btn btn-primary " onClick={logout}>LOGOUT</button>:''}
      </li>
      
    </ul>
    
  </div>
</nav>
   

    )
}

export default Navbar
