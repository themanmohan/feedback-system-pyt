
import React, {
  useEffect
} from 'react';
import Navbar from './components/Navbar/Navbar';
import FeedBackUser from './components/FeedBackDisplay/FeedBackUser';
import Form from './components/Form/Form';
import FeedBacks from './pages/FeedBacks';
import Home from './pages/Home'
import { useDispatch } from 'react-redux';
import {getFeedBack} from './Actions/feedback'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
   const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFeedBack());
  }, [dispatch]);

  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
       <Home/>
      </Route>
       <Route path="/feedbackform" exact>
       <Form/>
      </Route>
      <Route path="/feedback" exact>
       <FeedBacks/>
      </Route>
      <Route path="/feedbackuser" exact>
       <FeedBackUser/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
