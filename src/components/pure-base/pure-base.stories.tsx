import { storiesOf } from "@storybook/html";

storiesOf("Pure Base", module).add(
  "Base",
  () => `
    <pure-base>
      <p>This is a wrapper for your app that applies Normalize.css and a few customizations on top.</p>
      <p>
        <pure-button href="#">Link button</pure-button>
      </p>
    </pure-base>
  `
);
