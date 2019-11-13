import { storiesOf } from "@storybook/html";

storiesOf("Pure Grid", module)
  .add(
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
  )
  .add(
    "4 Column Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "3/4 Grid",
    () => `
  <pure-grid>
        <div class="pure-u-3-4">
            <div class="content">3/4</div>
        </div>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "3 Column Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-3">
            <div class="content">1/3</div>
        </div>
        <div class="pure-u-1-3">
            <div class="content">1/3</div>
        </div>
        <div class="pure-u-1-3">
            <div class="content">1/3</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "2/3 Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-3">
            <div class="content">1/3</div>
        </div>
        <div class="pure-u-2-3">
            <div class="content">2/3</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "5 Column Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-5">
            <div class="content">1/5</div>
        </div>
        <div class="pure-u-2-5">
            <div class="content">2/5</div>
        </div>
        <div class="pure-u-2-5">
            <div class="content">2/5</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "3/5 Grid",
    () => `
    <pure-grid>
        <div class="pure-u-3-5">
            <div class="content">3/5</div>
        </div>
        <div class="pure-u-2-5">
            <div class="content">2/5</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "6 Column Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-6">
            <div class="content">1/6</div>
        </div>
        <div class="pure-u-1-6">
            <div class="content">1/6</div>
        </div>
        <div class="pure-u-1-6">
            <div class="content">1/6</div>
        </div>
        <div class="pure-u-1-6">
            <div class="content">1/6</div>
        </div>
        <div class="pure-u-1-6">
            <div class="content">1/6</div>
        </div>
        <div class="pure-u-1-6">
            <div class="content">1/6</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "5/6 Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-6">
            <div class="content">1/6</div>
        </div>
        <div class="pure-u-5-6">
            <div class="content">5/6</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "8 Column Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-8">
            <div class="content">1/8</div>
        </div>
        <div class="pure-u-3-8">
            <div class="content">3/8</div>
        </div>
        <div class="pure-u-3-8">
            <div class="content">3/8</div>
        </div>
        <div class="pure-u-1-8">
            <div class="content">1/8</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "5/8 Grid",
    () => `
    <pure-grid>
        <div class="pure-u-3-8">
            <div class="content">3/8</div>
        </div>
        <div class="pure-u-5-8">
            <div class="content">5/8</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "7/8 Grid",
    () => `
    <pure-grid>
        <div class="pure-u-7-8">
            <div class="content">7/8</div>
        </div>
        <div class="pure-u-1-8">
            <div class="content">1/8</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "1/4 1/2 1/4",
    () => `
    <pure-grid>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
        <div class="pure-u-1-2">
            <div class="content">1/2</div>
        </div>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "1/8 1/2 1/8 1/4",
    () => `
    <pure-grid>
        <div class="pure-u-1-8">
            <div class="content">1/8</div>
        </div>
        <div class="pure-u-1-2">
            <div class="content">1/2</div>
        </div>
        <div class="pure-u-1-8">
            <div class="content">1/8</div>
        </div>
        <div class="pure-u-1-4">
            <div class="content">1/4</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "12 Column Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-12">
            <div class="content">1/12</div>
        </div>
        <div class="pure-u-5-12">
            <div class="content">5/12</div>
        </div>
        <div class="pure-u-1-12">
            <div class="content">1/12</div>
        </div>
        <div class="pure-u-5-12">
            <div class="content">5/12</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "7/12 Grid",
    () => `
    <pure-grid>
        <div class="pure-u-7-12">
            <div class="content">7/12</div>
        </div>
        <div class="pure-u-5-12">
            <div class="content">5/12</div>
        </div>
    </pure-grid>
`
  )
  .add(
    "11/12 Grid",
    () => `
    <pure-grid>
        <div class="pure-u-1-12">
            <div class="content">1/12</div>
        </div>
        <div class="pure-u-11-12">
            <div class="content">11/12</div>
        </div>
    </pure-grid>
`
  );
