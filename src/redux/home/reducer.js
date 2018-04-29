import { combineReducers } from "redux";
import { reducerGenerator } from "../../util/redux";

import types from "./type";
import newsReducerGenerator from "../common/news";
import promoReducerGenerator from "../common/promo";

import initialState from "./initial-state";

const newsReducer = newsReducerGenerator("home");
const promoReducer = promoReducerGenerator("home", initialState.promo);

const courseActionHandlers = {
    [types.GET_COURSE_LOADING]: state => ({
        ...state,
        status: "loading"
    }),
    [types.GET_COURSE_ERROR]: state => ({
        ...state,
        status: "error"
    }),
    [types.GET_COURSE_SUCCESS]: (state, action) => ({
        ...state,
        status: "success",
        course: action.course
    })
};

const courseReducer = reducerGenerator(
    "",
    courseActionHandlers,
    initialState.course
);

const reducer = combineReducers({
    promo: promoReducer,
    news: newsReducer,
    course: courseReducer
});

export default reducer;
