import { createSelector } from "reselect";
import { newsSelectors } from "../common/news";
import { promoSelectors } from "../common/promo";

import { EDITOR_CHOICE_NUM } from "./const";

const selectPageRoot = state => state.home;
const selectNews = createSelector(selectPageRoot, page => page.news);
const selectPromo = createSelector(selectPageRoot, page => page.promo);
const selectCourse = createSelector(selectPageRoot, page => page.course);

const selectNewsData = createSelector(selectNews, news =>
    newsSelectors.selectNewsData(news)
);

const selectPromoData = createSelector(selectPromo, promo =>
    promoSelectors.selectPromoData(promo)
);

const selectCourseStatus = createSelector(
    selectCourse,
    course => course.status
);

const selectCourseData = createSelector(selectCourse, course => course.course);

const selectEditorsChoiceNews = createSelector(selectNews, news =>
    newsSelectors.selectFeaturedNewsData(news).slice(0, EDITOR_CHOICE_NUM)
);

const selectOtherNews = createSelector(selectNewsData, newsData => {
    let remainingFeatured = EDITOR_CHOICE_NUM;
    return (
        newsData &&
        newsData.reduce((result, item) => {
            if (item.isFeatured && remainingFeatured > 0) {
                remainingFeatured -= 1;
            } else {
                result.push(item);
            }
            return result;
        }, [])
    );
});

const isNewsFetched = createSelector(selectNews, news =>
    newsSelectors.isNewsFetched(news)
);

const isPromoFetched = createSelector(selectPromo, promo =>
    promoSelectors.isPromoFetched(promo)
);

const isCourseFetched = createSelector(
    selectCourseStatus,
    status => status === "success"
);

export default {
    selectPromoData,
    selectEditorsChoiceNews,
    selectOtherNews,
    selectCourseData,
    isNewsFetched,
    isPromoFetched,
    isCourseFetched
};
