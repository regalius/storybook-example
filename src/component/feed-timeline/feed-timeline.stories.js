import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { text, object, boolean } from "@storybook/addon-knobs/react";

import FeedTimeline from "./feed-timeline";
import FeedTimelineItem from "./item";

import { data as news } from "./__mocks__";

const story = storiesOf("Component/Feed Timeline", module);

if (process.env.NODE_ENV !== "test") {
    story.add(
        "Read Me",
        withInfo()(() => <FeedTimeline news={object("news", news)} />)
    );
}

story.add("default", () => <FeedTimeline news={object("news", news)} />);
story.add("item", () => (
    <FeedTimelineItem
        title={text("title", news[0].title)}
        author={text("author", news[0].author)}
        image={text("image", news[0].image)}
        date={text("date", news[0].date)}
        isFeatured={boolean("isFeatured", news[0].isFeatured)}
    />
));
