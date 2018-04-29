import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { object } from "@storybook/addon-knobs/react";

import PromoBar from "./promo-bar";

import { data as promos } from "./__mocks__";

const story = storiesOf("Component/Promo Bar", module);

if (process.env.NODE_ENV !== "test") {
    story.add(
        "Read Me",
        withInfo()(() => <PromoBar promos={object("promos", promos)} />)
    );
}

story.add("default", () => <PromoBar promos={object("promos", promos)} />);
