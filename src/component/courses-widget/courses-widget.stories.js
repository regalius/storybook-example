import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { text, object } from "@storybook/addon-knobs/react";

import CoursesWidget from "./courses-widget";
import CoursesWidgetItem from "./item";

import { data as courses } from "./__mocks__";

const story = storiesOf("Component/Courses Widget", module);

const onEnrollBtnClick = action("Enroll Button Clicked!");

if (process.env.NODE_ENV !== "test") {
    story.add(
        "Read Me",
        withInfo()(() => (
            <CoursesWidget
                courses={object("courses", courses)}
                onEnrollBtnClick={onEnrollBtnClick}
            />
        ))
    );
}

story.add("default", () => (
    <CoursesWidget
        courses={object("courses", courses)}
        onEnrollBtnClick={onEnrollBtnClick}
    />
));
story.add("item", () => (
    <CoursesWidgetItem
        title={text("title", courses[0].title)}
        author={text("author", courses[0].author)}
        image={text("image", courses[0].image)}
        duration={text("duration", courses[0].duration)}
        onEnrollBtnClick={onEnrollBtnClick}
    />
));
