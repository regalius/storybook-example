import { createSelector } from "reselect";
import { newsSelectors } from "../common/news";
import { promoSelectors } from "../common/promo";

const selectPageRoot = state => state.newsfeed;
const selectNews = createSelector(selectPageRoot, page => page.news);
const selectPromo = createSelector(selectPageRoot, page => page.promo);

const selectNewsData = createSelector(selectNews, news =>
    newsSelectors.selectNewsData(news)
);
const selectPromoData = createSelector(selectPromo, promo =>
    promoSelectors.selectPromoData(promo)
);

const selectPersonalizedNews = createSelector(selectNewsData, newsData =>
    newsData.filter(item => item.isPersonalized)
);

const selectFeaturedNews = createSelector(selectNews, news =>
    newsSelectors
        .selectFeaturedNewsData(news)
        .filter(item => !item.isPersonalized)
);

const selectOtherNews = createSelector(selectNews, news =>
    newsSelectors
        .selectNotFeaturedNewsData(news)
        .filter(item => !item.isPersonalized)
);

const isNewsFetched = createSelector(selectNews, news =>
    newsSelectors.isNewsFetched(news)
);

const isPromoFetched = createSelector(selectPromo, promo =>
    promoSelectors.isPromoFetched(promo)
);

export default {
    selectPageRoot,
    selectPromoData,
    selectNews,
    selectPersonalizedNews,
    selectFeaturedNews,
    selectOtherNews,
    isNewsFetched,
    isPromoFetched
};
