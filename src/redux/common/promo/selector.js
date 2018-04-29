import { createSelector } from "reselect";

const selectPromoStatus = state => state.status;
const selectPromoData = state => state.promo;

const isPromoFetched = createSelector(
    selectPromoStatus,
    status => status === "success"
);

export default {
    selectPromoStatus,
    selectPromoData,
    isPromoFetched
};
