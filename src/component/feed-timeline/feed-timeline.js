// @flow
import * as React from "react";

import { News } from "../../flowtypes/news";

import FeedTimelineItem from "./item";

import "./feed-timeline.css";

type PropsType = {
    /** List of news to be displayed */
    news: Array<News>
};

/** A component to display news in modern timeline style */
const FeedTimeline = ({ news }: PropsType): React.Node => (
    <div className="feed_timeline">
        {news.map(
            ({
                id,
                title,
                image,
                author,
                date,
                isFeatured
            }: News): React.Element<typeof FeedTimelineItem> => (
                <FeedTimelineItem
                    key={id}
                    title={title}
                    image={image}
                    author={author}
                    date={date}
                    isFeatured={isFeatured}
                />
            )
        )}
    </div>
);

FeedTimeline.defaultProps = {
    news: []
};

export default FeedTimeline;
