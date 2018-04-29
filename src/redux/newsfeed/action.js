import { newsActions as newsActionsGenerator } from "../common/news";
import { promoActions as promoActionsGenerator } from "../common/promo";

import NewsAPI from "../../api/news";
import PromoAPI from "../../api/promo";

const newsActions = newsActionsGenerator("newsfeed");
const promoActions = promoActionsGenerator("newsfeed");

const getNews = () => dispatch => {
    dispatch(newsActions.getNewsLoading());
    return NewsAPI.getNews("newsfeed")
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

    return Promise.all([PromoAPI.getPromo(), PromoAPI.getPersonalizedPromo()])
        .then(responses => {
            const [promo, personalizedPromo] = responses;
            dispatch(
                promoActions.getPromoSuccess([...personalizedPromo, ...promo])
            );
        })
        .catch(err => {
            console.error(err);
            dispatch(promoActions.getPromoError());
        });
};

export default {
    ...newsActions,
    ...promoActions,
    getNews,
    getPromo
};
