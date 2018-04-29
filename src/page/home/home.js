import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { homeActions, homeSelectors } from "../../redux/home";

import FeedWidget from "../../component/feed-widget";
import FeedTimeline from "../../component/feed-timeline";
import CoursesWidget from "../../component/courses-widget";
import PromoBar from "../../component/promo-bar";

import "./home.css";
import logo from "../../assets/logo.svg";

class Home extends Component {
    componentDidMount() {
        const {
            isNewsFetched,
            isPromoFetched,
            isCourseFetched,
            onPageEnter
        } = this.props;

        if (onPageEnter) {
            onPageEnter(isNewsFetched, isPromoFetched, isCourseFetched);
        }
    }

    render() {
        const { editorsChoiceNews, otherNews, promos, courses } = this.props;

        return (
            <div className="page home">
                {promos && promos.length > 0 && <PromoBar promos={promos} />}
                <div className="home__header">
                    <img src={logo} className="home__logo" alt="logo" />
                    <h1 className="home__title">Welcome to React News</h1>
                    <p className="home__intro">
                        Your daily dose of React awesomeness
                    </p>
                </div>
                <div className="home__content">
                    {editorsChoiceNews &&
                        editorsChoiceNews.length > 0 && (
                            <Fragment>
                                <span className="home__content_title">
                                    Editor's choice:
                                </span>
                                <FeedWidget news={editorsChoiceNews} />
                                <br />
                                <span className="home__content_title">
                                    Other News:
                                </span>
                            </Fragment>
                        )}
                    {otherNews &&
                        otherNews.length > 0 && (
                            <FeedTimeline news={otherNews} />
                        )}
                    {courses &&
                        courses.length > 0 && (
                            <Fragment>
                                <span className="home__content_title">
                                    Newest Courses:
                                </span>
                                <CoursesWidget courses={courses} />
                            </Fragment>
                        )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editorsChoiceNews: homeSelectors.selectEditorsChoiceNews(state),
    otherNews: homeSelectors.selectOtherNews(state),
    promos: homeSelectors.selectPromoData(state),
    courses: homeSelectors.selectCourseData(state),
    isNewsFetched: homeSelectors.isNewsFetched(state),
    isPromoFetched: homeSelectors.isPromoFetched(state),
    isCourseFetched: homeSelectors.isCourseFetched(state)
});

const mapDispatchToProps = dispatch => ({
    onPageEnter: (isNewsFetched, isPromoFetched, isCourseFetched) => {
        if (!isNewsFetched) {
            dispatch(homeActions.getNews());
        }
        if (!isPromoFetched) {
            dispatch(homeActions.getPromo());
        }
        if (!isCourseFetched) {
            dispatch(homeActions.getCourse());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
