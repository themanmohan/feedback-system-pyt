import { combineReducers } from "redux";
import FeedBack from './FeedBack'
import auth from './auth'
export default combineReducers({
    FeedBack,
    auth
})