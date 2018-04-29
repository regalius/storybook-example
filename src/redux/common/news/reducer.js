import { reducerGenerator } from "../../../util/redux";
import initialState from "./initial-state";
import types from "./type";

const newsActionHandler = guardedInitialState => ({
    [types.FLUSH_NEWS]: () => guardedInitialState,
    [types.GET_NEWS_LOADING]: state => ({
        ...state,
        status: "loading"
    }),
    [types.GET_NEWS_ERROR]: state => ({
        ...state,
        status: "error"
    }),
    [types.GET_NEWS_SUCCESS]: (state, action) => ({
        ...state,
        status: "success",
        news: action.news
    })
});

const reducer = (pageName, pageInitialState) => {
    const guardedInitialState = pageInitialState || initialState;
    return reducerGenerator(
        pageName,
        newsActionHandler(guardedInitialState),
        guardedInitialState
    );
};

export default reducer;
