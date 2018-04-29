import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, object, boolean } from "@storybook/addon-knobs/react";

import FeedWidget from "./feed-widget";
import FeedWidgetItem from "./item";

import { data as news } from "./__mocks__";

const story = storiesOf("Component/Feed Widget", module);

if (process.env.NODE_ENV !== "test") {
    story.add(
        "Read Me",
        withInfo()(() => <FeedWidget news={object("news", news)} />)
    );
}

story.add("default", () => <FeedWidget news={object("news", news)} />);
story.add("item", () => (
    <FeedWidgetItem
        title={text("title", news[0].title)}
        author={text("author", news[0].author)}
        image={text("image", news[0].image)}
        date={text("date", news[0].date)}
        isFeatured={boolean("isFeatured", news[0].isFeatured)}
    />
));
