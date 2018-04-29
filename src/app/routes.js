import Home from "../page/home";
import Newsfeed from "../page/newsfeed";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
        exact: true
    },
    {
        name: "Newsfeed",
        path: "/news",
        component: Newsfeed
    }
];

export default routes;
