import { storiesOf } from "@storybook/html";

storiesOf("Pure Grid", module).add(
  "Two column grid",
  () => `
<pure-grid>
  <div class="pure-u-1-2">
    <div class="content">1/2</div>
  </div>
  <div class="pure-u-1-2">
    <div class="content">1/2</div>
  </div>
</pure-grid>
`
);
