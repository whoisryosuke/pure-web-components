import { storiesOf } from "@storybook/html";

storiesOf("Pure Form", module)
  .add(
    "Basic form",
    () => `
    <pure-form>
        <fieldset>
            <legend>An inline form. Check for alignment and input/select sizing.</legend>

            <input type="text" placeholder="text input">
            <input type="search" placeholder="search input">
            <select name="fooselect">
                <option value="CA">CA</option>
                <option value="NY">NY</option>
            <select>


            <button type="submit">Sign in</button>
        </fieldset>
    </pure-form>
  `
  )
  .add(
    "Stacked form",
    () => `
    <pure-form stacked>
        <fieldset>
            <legend>Legend</legend>

            <label>First Name</label>
            <input type="text">

            <label>Password</label>
            <input type="password">

            <label>E-Mail</label>
            <input type="email" required>
            <aside class="pure-help-inline">This is a required field.</aside>

            <label>City</label>
            <input type="text">
            <aside class="pure-form-message">This is another required field.</aside>

            <label>State</label>
            <select class="pure-input-medium">
                <option>AL</option>
                <option>CA</option>
                <option>IL</option>
                <option>MD</option>
                <option>NY</option>
            </select>

            <label>Color</label>
            <input type="color">

            <label class="pure-checkbox">
                <input type="checkbox"> I've read the terms and conditions
            </label>

            <pure-button type="submit" class="pure-button notice">Submit</pure-button>
            <pure-button type="reset" class="pure-button">Reset</pure-button>
        </fieldset>
    </pure-form>
  `
  )
  .add(
    "Aligned form",
    () => `
    <pure-form aligned>
        <fieldset>
            <div class="pure-control-group">
                <label>Username</label>
                <input type="text" placeholder="Username">
                <aside class="pure-form-message-inline">This is a <code>pure-form-message-inline</code> field.</aside>
            </div>

            <div class="pure-control-group">
                <label>Password</label>
                <input type="password" placeholder="Password">
                <aside class="pure-help-inline">This is a <code>pure-help-inline</code> field. Deprecated.</aside>
            </div>

            <div class="pure-control-group">
                <label>Email Address</label>
                <input type="text" placeholder="Email Address">
            </div>

            <div class="pure-control-group">
                <label>Here's a button</label>
                <pure-button as="input" type="button" value="Button" />
            </div>

            <div class="pure-control-group">
                <label>Supercalifragilistic Label</label>
                <input type="text" placeholder="Enter something here...">
            </div>

            <div class="pure-controls">
                <label class="pure-checkbox">
                    <input type="checkbox"> Remember Me
                </label>

                <pure-button type="submit" class="pure-button">Submit</pure-button>
            </div>
        </fieldset>
    </pure-form>
  `
  )
  .add(
    "Multi-Column Form with Grid",
    () => `
  <pure-form stacked>
  
        <fieldset>
            <legend>Legend</legend>

            <pure-grid>
                <div class="pure-u-1 pure-u-md-1-3">
                    <label>First Name</label>
                    <input type="text">
                </div>
                <div class="pure-u-1 pure-u-md-1-3">
                    <label>Password</label>
                    <input type="password">
                </div>
                <div class="pure-u-1 pure-u-md-1-3">
                    <label>E-Mail</label>
                    <input type="email" required>
                </div>
                <div class="pure-u-1 pure-u-md-1-3">
                    <label>City</label>
                    <input type="text">
                </div>
                <div class="pure-u-1 pure-u-md-1-3">
                    <label>State</label>
                    <select class="pure-input-medium">
                        <option>AL</option>
                        <option>CA</option>
                        <option>IL</option>
                        <option>MD</option>
                        <option>NY</option>
                    </select>
                </div>
            </pure-grid>

            <label class="pure-checkbox">
                <input type="checkbox"> I've read the terms and conditions
            </label>

            <pure-button type="submit">Submit</pure-button>
            <pure-button type="reset">Reset</pure-button>
        </fieldset>
  </pure-form>`
  );
