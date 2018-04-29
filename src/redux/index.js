import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const configureStore = (initialState = {}) => {
    const middlewares = [thunk],
        store = createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(...middlewares))
        );
    return store;
};

export default configureStore;
