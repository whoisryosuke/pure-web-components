![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Pure Web Components

Web Components inspired by [Pure CSS](https://purecss.io).

# Features

- 🎛 6 minimal components
- 🌑 Shadow DOM
- 🎨 Theming using CSS Variables
- 💄 SASS/SCSS
- 🌲 Works in any modern browser (see here)
- 📲 E2E testing
- 📸 Snapshot testing
- 📘 Storybook
- 🔷 Typescript
- ⛓ JSX + VDOM

# Getting Started

```bash
git clone https://github.com/whoisryosuke/pure-web-components.git
cd pure-web-components
yarn
yarn story
```

To build the component for production, run:

```bash
yarn build
```

To run the unit tests for the components, run:

```bash
yarn test
```

## Creating new components

`yarn generate pure-component-name-here`

You will be prompted by the Stencil CLI about what files you'd like to generate, then it'll output the component into your `src/components/` folder.

## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app

- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc

### In a React app

[Found this guide that explains process well](https://github.com/alesgenova/stenciljs-in-react), with reasons why workarounds are used. Short answer: React doesn't pass props to Web Components correctly, so you have to use a combo of refs and utility class. It also handles events differently, using it's own form of synthetic events.

1. Add the component(s) to the dependencies: `npm install my-component --save`
2. Import the component(s) using the Stencil loader:

```js
import { defineCustomElements as defineMolecule } from "@openchemistry/molecule-vtkjs/dist/loader";
import { defineCustomElements as defineSplitMe } from "split-me/dist/loader";

defineMolecule(window);
defineSplitMe(window);
```

3. Use the component:

```js
render() {
    return (
      <split-me n="2">
        <oc-molecule-vtkjs slot="0"></oc-molecule-vtkjs>
        <oc-molecule-vtkjs slot="1"></oc-molecule-vtkjs>
      </split-me>
    )
}
```

When you need to pass objects/array/JSON to props, use this reusable utility function [wc](https://github.com/alesgenova/stenciljs-in-react/blob/master/src/utils/webcomponent.js):

```js
/***
 Taken from: https://github.com/ionic-team/ionic-react-conference-app/blob/master/src/utils/stencil.js
 
This function is meant to make it easier to use Props and Custom Events with Custom
Elements in React.
<ion-segment
  value={props.filterFavorites}
  ionChange={(e) => props.updateFavoriteFilter(e.target.value)}
>
</ion-segment>
     <<< SHOULD BE WRITTEN AS >>>
<ion-segment
  value={props.filterFavorites}
  ref={wc({
    ionChange: (e) => props.updateFavoriteFilter(e.target.value)
  })}
>
</ion-segment>
***/
export function wc(customEvents = {}, props = {}) {
  let storedEl;

  return function(el) {
    for (let name in customEvents) {
      let value = customEvents[name];
      // If we have an element then add event listeners
      // otherwise remove the event listener
      const action = el ? el.addEventListener : storedEl.removeEventListener;
      if (typeof value === "function") {
        action(name, value);
        return;
      }
    }

    // If we have an element then set props
    if (el) {
      for (let name in props) {
        let value = props[name];
        el[name] = value;
      }
    }
    storedEl = el;
  };
}
```

And then use it in the `jsx` to bind events and properties to the webcomponent this way:

```js
import React, { Component } from "react";
import { wc } from "./utils/webcomponent";

class SomeComponent extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "20rem", position: "relative" }}>
        <oc-molecule-vtkjs
          ref={wc(
            // Events
            {},
            // Props
            {
              cjson: molecule
            }
          )}
        />
      </div>
    );
  }
}

export default SomeComponent;
```

## Customizing the grid

Pure Web Components comes preloaded with 2-8, 12, and 24 column grids using class names formatted like `.pure-u-1-4` (1/4 width or 1 part of a 4 column grid).

There are also responsive classes that use CSS media queries to only set the column width for certain viewports. For example, this button will be 1/2 width at mobile, or 1/3 at higher viewports: `<div class="pure-u-sm-1-2 pure-u-md-1-3">`. These classes require many viewport variations (each grid x column number x viewports = a lot of unused CSS without PurgeCSS). Because of this, only 2-5 and 12 columns are available responsively.

### Adding more grid variations

You can enable more grids by editing [pure-grid.scss](src/components/pure-grid/pure-grid.scss) and using the `grid-generator` SASS mixin. The mixin accepts the number of columns, and an optional breakpoint. These breakpoints are defined in the `@mixin respond-from` which outputs media queries - also located in the same file.

# Todo

- ✅ `<pure-button>` component
- ✅ `<pure-form>` component
- ✅ `<pure-grid>` component
- ✅ `<pure-grid>` story examples
- ✅ `<pure-base>` component + story examples
- ✅ `<pure-menu>` component + story examples
- [] `<pure-menu>` CSS dropdowns
- ✅ `<pure-table>` component + story examples
- [] `<pure-button-group>` component + swap out in other component stories
- [] Create documentation
- - ✅ Test out Storybook Docs and MDX
- - [] Test out Gatsby using StencilJS and JSON output
