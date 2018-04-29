// @flow
import * as React from "react";

import { News } from "../../../flowtypes/news";

import "./item.css";

const FeedWidgetItem = ({ title, image, author, date }: News): React.Node => (
    <div className="feed_widget__item">
        <img className="feed_widget__image" src={image} alt={title} />
        <div className="feed_widget__content">
            <h2 className="feed_widget__title">{title}</h2>
            <span className="feed_widget__info">
                <span className="feed_widget__author">{author}</span>
                <span className="feed_widget__date">{date}</span>
            </span>
        </div>
    </div>
);

export default FeedWidgetItem;
