import { configure, addDecorator } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";
import { withTests } from "@storybook/addon-jest";
// import results from "../jest-test-results.json";

// addDecorator(
//   withTests({
//     results,
//     filesExt: ".spec.ts"
//   })
// );

// Add a11y support
addDecorator(withA11y);

// Add knobs to all stories
addDecorator(withKnobs);

// Theme provider wraps app
// addDecorator(story => <pure-base>{storyFn()}</pure-base>);

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
