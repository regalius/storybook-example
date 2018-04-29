import { configure, addDecorator } from "@storybook/react";
import { setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
// addon-info
setDefaults({
    header: true, // Toggles display of header with component name and description
    inline: true, // Displays info inline vs click button to view
    source: true // Displays the source of story Component
});

addDecorator((story, context) => withKnobs(story, context));

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
