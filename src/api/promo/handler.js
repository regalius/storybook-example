import { get } from "axios";
import endpoint from "./endpoint";

const getPromo = payload =>
    get(endpoint.promoEndpoint).then(response => {
        const { data } = response;
        return data;
    });

const getPersonalizedPromo = payload =>
    get(endpoint.personalizedPromoEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getPromo,
    getPersonalizedPromo
};
