import { createSelector } from "reselect";

const selectNewsStatus = state => state.status;
const selectNewsData = state => state.news;

const selectFeaturedNewsData = createSelector(selectNewsData, news =>
    news.filter(item => item.isFeatured)
);

const selectNotFeaturedNewsData = createSelector(selectNewsData, news =>
    news.filter(item => !item.isFeatured)
);

const isNewsFetched = createSelector(
    selectNewsStatus,
    status => status === "success"
);

export default {
    selectNewsStatus,
    selectNewsData,
    selectFeaturedNewsData,
    selectNotFeaturedNewsData,
    isNewsFetched
};
