import { configure, addDecorator } from "@storybook/html";
import { withTests } from "@storybook/addon-jest";
// import results from "../jest-test-results.json";

// addDecorator(
//   withTests({
//     results,
//     filesExt: ".spec.ts"
//   })
// );

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
