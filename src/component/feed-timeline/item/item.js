// @flow
import * as React from "react";

import { News } from "../../../flowtypes/news";

import "./item.css";

const FeedTimelineItem = ({
    title,
    image,
    author,
    date,
    isFeatured
}: News): React.Node => (
    <div className="feed_timeline__item">
        {isFeatured && (
            <span className="feed_timeline__item_featured_badge">
                Featured!
            </span>
        )}
        <img className="feed_timeline__item_image" src={image} alt={title} />
        <div className="feed_timeline__item_timeline">
            <h3 className="feed_timeline__item_title">{title}</h3>
            <span className="feed_timeline__item_author">{author}</span>
            <span className="feed_timeline__item_date">{date}</span>
        </div>
    </div>
);

export default FeedTimelineItem;
