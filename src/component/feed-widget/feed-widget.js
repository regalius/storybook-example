// @flow
import * as React from "react";

import { News } from "../../flowtypes/news";

import FeedWidgetItem from "./item";

import "./feed-widget.css";

type PropsType = {
    /** List of news to be displayed */
    news: Array<News>
};

/** Feed widget for displaying news in stylish block style */
const FeedWidget = ({ news }: PropsType): React.Node => (
    <div className="feed_widget">
        {news.map(({ id, title, image, author, date }: News): React.Element<
            typeof FeedWidgetItem
        > => (
            <FeedWidgetItem
                key={id}
                title={title}
                image={image}
                author={author}
                date={date}
            />
        ))}
    </div>
);

FeedWidget.defaultProps = {
    news: []
};

export default FeedWidget;
