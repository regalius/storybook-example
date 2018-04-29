import { combineReducers } from "redux";
import newsReducerGenerator from "../common/news";
import promoReducerGenerator from "../common/promo";

import initialState from "./initial-state";

const newsReducer = newsReducerGenerator("newsfeed");
const promoReducer = promoReducerGenerator("newsfeed", initialState.promo);

const reducer = combineReducers({
    promo: promoReducer,
    news: newsReducer
});

export default reducer;
