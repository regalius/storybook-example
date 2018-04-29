import { get } from "axios";
import endpoint from "./endpoint";

const getCourses = () =>
    get(endpoint.courseEndpoint).then(response => {
        const { data } = response;
        return data;
    });

export default {
    getCourses
};
