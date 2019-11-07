import { storiesOf } from "@storybook/html";

storiesOf("Pure Button", module)
  .add(
    "Primary button",
    () => `
    <pure-button color="primary">Submit Button</pure-button>
  `
  )
  .add(
    "Link button",
    () => `
    <pure-button color="primary">Submit Button</pure-button>
  `
  )
  .add(
    "Active button",
    () => `
    <pure-button color="active">Submit Button</pure-button>
  `
  )
  .add(
    "Disabled button",
    () => `
    <pure-button color="disabled">Submit Button</pure-button>
  `
  );
