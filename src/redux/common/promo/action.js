import { typeGenerator, actionCreatorGenerator } from "../../../util/redux";
import types from "./type";

const getPromoLoading = name => () => ({
    type: typeGenerator(name, types.GET_PROMO_LOADING)
});

const getPromoSuccess = name => promo => ({
    type: typeGenerator(name, types.GET_PROMO_SUCCESS),
    promo
});

const getPromoError = name => () => ({
    type: typeGenerator(name, types.GET_PROMO_ERROR)
});

const flushPromo = name => () => ({
    type: typeGenerator(name, types.FLUSH_PROMO)
});

const action = (pageName, params) =>
    actionCreatorGenerator(
        pageName,
        {
            getPromoLoading,
            getPromoError,
            getPromoSuccess,
            flushPromo
        },
        params
    );

export default action;
