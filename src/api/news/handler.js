import { get } from "axios";
import endpoint from "./endpoint";

const getNews = payload =>
    get(endpoint[payload]).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getNews
};
