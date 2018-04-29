import { combineReducers } from "redux";
import home from "./home";
import newsfeed from "./newsfeed";

const rootReducer = combineReducers({
    home,
    newsfeed
});

export default rootReducer;
