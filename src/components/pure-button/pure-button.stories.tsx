import { storiesOf } from "@storybook/html";

storiesOf("Pure Button", module)
  .add(
    "Regular button",
    () => `
    <p>
      <pure-button>Submit Button</pure-button>
      <pure-button href="#">Submit Button</pure-button>
    </p>
  `
  )
  .add(
    "Primary button",
    () => `
    <p>
      <pure-button color="primary">Submit Button</pure-button>
      <pure-button color="primary" href="#">Submit Button</pure-button>
    </p>
  `
  )
  .add(
    "Link button",
    () => `
    <pure-button color="primary" href="#">Submit Button</pure-button>
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
  ).add('Primary Form Buttons', () => `
    <p>
        <pure-button color="primary" href="#">Anchor</pure-button>
        <pure-button class="pure-button pure-button-primary">Button</pure-button>
        <pure-button as="input" color="primary" type="submit" value="Submit"></pure-button>
        <pure-button as="input" color="primary" type="button" value="Input Button"></pure-button>
        <pure-button as="input" color="primary" type="reset" value="Reset"></pure-button>
    </p>
  `).add('Button Groups', () => `
    <div>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="pure-button-group">
        <pure-button as="input" color="primary" type="submit" value="Submit"></pure-button>
        <pure-button as="input" color="primary" type="button" value="Input Button"></pure-button>
        <pure-button as="input" color="primary" type="reset" value="Reset"></pure-button>
      </div>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="pure-button-group">
          <pure-button href="#">Testing</pure-button>
          <pure-button color="primary" href="#">Button</pure-button>
          <pure-button color="active" href="#">Groups</pure-button>
      </div>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="pure-button-group">
          <pure-button>Testing</pure-button>
          <pure-button color="primary">Button</pure-button>
          <pure-button color="active">Groups</pure-button>
      </div>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  `);
