import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { newsfeedActions, newsfeedSelectors } from "../../redux/newsfeed";

import FeedWidget from "../../component/feed-widget";
import FeedTimeline from "../../component/feed-timeline";
import PromoBar from "../../component/promo-bar";

import "./newsfeed.css";
import logo from "../../assets/logo.svg";

class Newsfeed extends Component {
    componentDidMount() {
        const { isNewsFetched, isPromoFetched, onPageEnter } = this.props;
        if (onPageEnter) {
            onPageEnter(isNewsFetched, isPromoFetched);
        }
    }
    render() {
        const { personalizedNews, featuredNews, otherNews, promos } = this.props;
        return (
            <div className="page newsfeed">
                {promos && promos.length > 0 &&
                    <PromoBar promos={promos}></PromoBar>
                }
                <div className="newsfeed__header">
                    <img src={logo} className="newsfeed__logo" alt="logo" />
                    <h1 className="newsfeed__title">React Newsfeed</h1>
                    <p className="newsfeed__intro">
                        Your Personalized Newsfeed is here:
                    </p>
                </div>
                <div className="newsfeed__content">
                    {personalizedNews &&
                        personalizedNews.length > 0 && (
                            <Fragment>
                                <span className="newsfeed__content_header">
                                    Handpicked Just for You!
                                </span>
                                <FeedWidget news={featuredNews} />
                            </Fragment>
                        )}
                    {featuredNews &&
                        featuredNews.length > 0 && (
                            <Fragment>
                                <span className="newsfeed__content_header">
                                    Featured News:
                                </span>
                                <FeedTimeline news={featuredNews} />
                            </Fragment>
                        )}
                    {otherNews &&
                        otherNews.length > 0 && (
                            <Fragment>
                                {featuredNews &&
                                    personalizedNews && (
                                        <span className="newsfeed__content_header">
                                            Other News:
                                        </span>
                                    )}
                                <FeedTimeline news={otherNews} />
                            </Fragment>
                        )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    personalizedNews: newsfeedSelectors.selectPersonalizedNews(state),
    featuredNews: newsfeedSelectors.selectFeaturedNews(state),
    otherNews: newsfeedSelectors.selectOtherNews(state),
    promos: newsfeedSelectors.selectPromoData(state),
    isNewsFetched: newsfeedSelectors.isNewsFetched(state),
    isPromoFetched: newsfeedSelectors.isPromoFetched(state)
});

const mapDispatchToProps = dispatch => ({
    onPageEnter: (isNewsFetched, isPromoFetched) => {
        if(!isNewsFetched) {
            dispatch(newsfeedActions.getNews());
        }

        if(!isPromoFetched) {
            dispatch(newsfeedActions.getPromo());
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
