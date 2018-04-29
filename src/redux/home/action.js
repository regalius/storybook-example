import { newsActions as newsActionsGenerator } from "../common/news";
import { promoActions as promoActionsGenerator } from "../common/promo";

import types from "./type";

import NewsAPI from "../../api/news";
import PromoAPI from "../../api/promo";
import CourseAPI from "../../api/course";

const getCourseLoading = () => ({
    type: types.GET_COURSE_LOADING
});

const getCourseError = () => ({
    type: types.GET_COURSE_ERROR
});

const getCourseSuccess = course => ({
    type: types.GET_COURSE_SUCCESS,
    course
});

const newsActions = newsActionsGenerator("home");
const promoActions = promoActionsGenerator("home");

const getNews = () => dispatch => {
    dispatch(newsActions.getNewsLoading());
    return NewsAPI.getNews("home")
        .then(response => {
            dispatch(newsActions.getNewsSuccess(response));
        })
        .catch(err => {
            console.error(err);
            dispatch(newsActions.getNewsError());
        });
};

const getPromo = () => dispatch => {
    dispatch(promoActions.getPromoLoading());
    return PromoAPI.getPromo()
        .then(response => {
            dispatch(promoActions.getPromoSuccess(response));
        })
        .catch(err => {
            console.error(err);
            dispatch(promoActions.getPromoError());
        });
};

const getCourse = () => dispatch => {
    dispatch(getCourseLoading());
    return CourseAPI.getCourses()
        .then(response => {
            dispatch(getCourseSuccess(response));
        })
        .catch(err => {
            console.error(err);
            dispatch(getCourseError());
        });
};

export default {
    ...newsActions,
    ...promoActions,
    getNews,
    getPromo,
    getCourse
};
