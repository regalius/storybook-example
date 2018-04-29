import { typeGenerator, actionCreatorGenerator } from "../../../util/redux";
import types from "./type";

const getNewsLoading = name => () => ({
    type: typeGenerator(name, types.GET_NEWS_LOADING)
});

const getNewsSuccess = name => news => ({
    type: typeGenerator(name, types.GET_NEWS_SUCCESS),
    news
});

const getNewsError = name => () => ({
    type: typeGenerator(name, types.GET_NEWS_ERROR)
});

const flushNews = name => () => ({
    type: typeGenerator(name, types.FLUSH_NEWS)
});

const action = (pageName, params) =>
    actionCreatorGenerator(
        pageName,
        {
            getNewsLoading,
            getNewsError,
            getNewsSuccess,
            flushNews
        },
        params
    );

export default action;
