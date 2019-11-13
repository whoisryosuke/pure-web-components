import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/html";

// Create Knobs
const inputTextKnob = (inputText = "Submit", inputLabel = "Name") =>
  text(inputLabel, inputText);

storiesOf("Pure Form", module)
  .add(
    "Basic form",
    () => `
    <pure-form>
        <fieldset>
            <legend>An inline form. Check for alignment and input/select sizing.</legend>

            <input type="text" placeholder="${inputTextKnob(
              "text input",
              "text"
            )}">
            <input type="search" placeholder="${inputTextKnob(
              "search input",
              "search"
            )}">
            <select name="fooselect">
                <option value="CA">CA</option>
                <option value="NY">NY</option>
            <select>


            <pure-button type="submit">${inputTextKnob(
              "Submit form",
              "Button"
            )}</pure-button>
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

            <pure-button type="submit" class="notice">Submit</pure-button>
            <pure-button type="reset">Reset</pure-button>
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

                <pure-button type="submit">Submit</pure-button>
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
  )
  .add(
    "Grouped form",
    () => `
    <pure-form>
        <fieldset class="pure-group">
            <input type="text" class="pure-input-1-3" placeholder="Username">
            <input type="text" class="pure-input-1-3" placeholder="Password">
            <input type="text" class="pure-input-1-3" placeholder="Email">
        </fieldset>

        <fieldset class="pure-group">
            <input type="text" class="pure-input-1-3" placeholder="Another Group">
            <textarea class="pure-input-1-3" placeholder="Textareas can work here too"></textarea>
            <input type="text" class="pure-input-1-3" placeholder="Even More Stuff">
            <input type="text" class="pure-input-1-3" placeholder="Last Item">
        </fieldset>
        <pure-button type="submit" class="pure-input-1-3">Sign in</pure-button>
    </pure-form>
  `
  )
  .add(
    "Input Sizing",
    () => `
  <div className="example">
    <pure-form>
        <input class="pure-input-1" type="text" placeholder=".pure-input-1"><br/>
        <input class="pure-input-3-4" type="text" placeholder=".pure-input-3-4"><br/>
        <input class="pure-input-2-3" type="text" placeholder=".pure-input-2-3"><br/>
        <input class="pure-input-1-2" type="text" placeholder=".pure-input-1-2"><br/>
        <input class="pure-input-1-3" type="text" placeholder=".pure-input-1-3"><br/>
        <input class="pure-input-1-4" type="text" placeholder=".pure-input-1-4"><br/>
    </pure-form>


    <pure-form>
        <div class="pure-g">
            <div class="pure-u-1-4">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-4">
            </div>

            <div class="pure-u-3-4">
                <input class="pure-input-1" type="text" placeholder=".pure-u-3-4">
            </div>
        </div>

        <div class="pure-g">
            <div class="pure-u-1-2">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-2">
            </div>

            <div class="pure-u-1-2">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-2">
            </div>
        </div>

        <div class="pure-g">
            <div class="pure-u-1-8">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-8">
            </div>

            <div class="pure-u-1-8">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-8">
            </div>

            <div class="pure-u-1-4">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-4">
            </div>

            <div class="pure-u-1-2">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-2">
            </div>
        </div>

        <div class="pure-g">
            <div class="pure-u-1-5">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1-5">
            </div>

            <div class="pure-u-2-5">
                <input class="pure-input-1" type="text" placeholder=".pure-u-2-5">
            </div>

            <div class="pure-u-2-5">
                <input class="pure-input-1" type="text" placeholder=".pure-u-2-5">
            </div>

            <div class="pure-u-1">
                <input class="pure-input-1" type="text" placeholder=".pure-u-1">
            </div>
        </div>
    </pure-form>
  </div>
  `
  )
  .add(
    "Invalid Input",
    () => `
    <pure-form>
        <input type="email" placeholder="Requires an email" required>
    </pure-form>
  `
  )
  .add(
    "Disabled Input",
    () => `
    <pure-form>
        <input class="pure-input-xlarge" type="text" placeholder="Disabled input here..." value="Foo bar baz" disabled>
    </pure-form>
  `
  )
  .add(
    "Readonly Input",
    () => `
    <pure-form>
        <input class="pure-input-xlarge" type="text" placeholder="Readonly input here..." value="Foo bar baz" readonly>
    </pure-form>
  `
  )
  .add(
    "Rounded Input",
    () => `
    <pure-form stacked>
        <label>Subject</label>
        <input type="text" class="pure-input-rounded" placeholder="Subject" />

        <label>Message</label>
        <textarea class="pure-input-rounded" rows="5" cols="40" placeholder="Message..."></textarea>

        <button type="submit" class="pure-input-rounded">Search</button>
        <input type="reset" class="pure-input-rounded" value="Reset" />
    </pure-form>
  `
  )
  .add(
    "Select Inputs",
    () => `
  <pure-form>
        <select class="pure-input-medium">
            <option>Brazil</option>
            <option>Canada</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Venezuela</option>
        </select>

        <select multiple="multiple" class="pure-input-large">
            <option>Brazil</option>
            <option>Canada</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Venezuela</option>
        </select>
    </pure-form>
  `
  )
  .add(
    "Checkboxes and Radios",
    () => `
    <pure-form>
        <label class="pure-checkbox">
            <input type="checkbox" value="">
            Here's option one.
        </label>

        <label class="pure-radio">
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
            Here's a radio button. You can choose this one...
        </label>

        <label class="pure-radio">
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
            ...Or this one!
        </label>
    </pure-form>
  `
  )
  .add(
    "Help Text",
    () => `
    <pure-form stacked>
        <fieldset>
            <label>Last Name</label>
            <input type="text" />
            <aside class="pure-form-message">Block help text</aside>
        </fieldset>
    </pure-form>
  `
  )
  .add(
    "Buttons",
    () => `
    <pure-form>
        <pure-button color="primary" href="#">Anchor</pure-button>
        <pure-button class="pure-button-primary">Button</pure-button>
        <pure-button as="input" color="primary" type="submit" value="Submit"></pure-button>
        <pure-button as="input" color="primary" type="button" value="Input Button"></pure-button>
        <pure-button as="input" color="primary" type="reset" value="Reset"></pure-button>
    </pure-form>
  `
  );
