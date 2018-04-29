import { reducerGenerator } from "../../../util/redux";
import initialState from "./initial-state";
import types from "./type";

const promoActionHandler = guardedInitialState => ({
    [types.FLUSH_PROMO]: () => guardedInitialState,
    [types.GET_PROMO_LOADING]: state => ({
        ...state,
        status: "loading"
    }),
    [types.GET_PROMO_ERROR]: state => ({
        ...state,
        status: "error"
    }),
    [types.GET_PROMO_SUCCESS]: (state, action) => ({
        ...state,
        status: "success",
        promo: [...state.promo, ...action.promo]
    })
});

const reducer = (pageName, pageInitialState) => {
    const guardedInitialState = pageInitialState || initialState;
    return reducerGenerator(
        pageName,
        promoActionHandler(guardedInitialState),
        guardedInitialState
    );
};

export default reducer;
