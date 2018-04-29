import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import StoryRouter from "storybook-react-router";

import Header from "./header";

const story = storiesOf("Component/Header", module).addDecorator(StoryRouter());

if (process.env.NODE_ENV !== "test") {
    story.add("Read Me", withInfo()(() => <Header />));
}

story.add("default", () => <Header />);
