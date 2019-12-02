<p align="center"><a href="https://pure-web-components.netlify.com/"><img src="Pure Web Components - Horizontal.png" alt="Pure Web Components Logo" /></a></p>

<p align="center">
<a href="https://www.npmjs.com/package/pure-web-components"><img alt="npm" src="https://img.shields.io/npm/v/pure-web-components"></a>
<a href="https://www.npmjs.com/package/pure-web-components"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/pure-web-components?style=flat"></a>
<img src="https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square" alt="Built With Stencil" />
<a href="https://pure-web-components-storybook.netlify.com/"><img src="https://github.com/storybookjs/brand/raw/master/badge/badge-storybook.svg?sanitize=true" alt="Browse our Storybook" /></a>
<a href="https://github.com/whoisryosuke/pure-web-components/blob/master/LICENSE"><img alt="NPM" src="https://img.shields.io/npm/l/pure-web-components"></a>
</p>

# About Pure Web Components

Web Components inspired by [Pure CSS](https://purecss.io). 6 web components in 37KBs of uncompressed JS _(without CSS or optional polyfills)_.

# Components

- [Base](https://pure-web-components.netlify.com/components/pure-base/)
- [Button](https://pure-web-components.netlify.com/components/pure-button/)
- [Form](https://pure-web-components.netlify.com/components/pure-form/)
- [Grid](https://pure-web-components.netlify.com/components/pure-grid/)
- [Menu](https://pure-web-components.netlify.com/components/pure-menu/)
- [Table](https://pure-web-components.netlify.com/components/pure-table/)

# Features

- 🎛 6 minimal components
- 🎨 Theming using CSS Variables
- 💄 SASS/SCSS
- 🌲 Works in any modern browser [(see here)](#creating-new-components)
- 📲 E2E testing
- 📸 Snapshot testing
- 📘 Storybook
- 🔷 Typescript
- ⛓ JSX + VDOM

# Documentation

You can find [the documentation for all the web components in this library here.](https://pure-web-components.netlify.com/) You can also browse [the ![Storybook logo](https://github.com/storybookjs/brand/raw/master/icon/icon-storybook-default.svg?sanitize=true) Storybook with examples of each component here.](https://pure-web-components-storybook.netlify.com/)

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

## Using these components

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/pure-web-components@0.0.1/dist/pure-web-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, HTML etc

### Node Modules

- Run `npm install pure-web-components --save`
- Put a script tag similar to this `<script src='node_modules/pure-web-components/dist/pure-web-components.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, HTML etc

### In a stencil-starter app

- Run `npm install pure-web-components --save`
- Add an import to the npm packages `import pure-web-components;`
- Then you can use the elements anywhere in your template, JSX, HTML etc

### In a React app

[Found this guide that explains process well](https://github.com/alesgenova/stenciljs-in-react), with reasons why workarounds are used. Short answer: React doesn't pass props to Web Components correctly, so you have to use a combo of refs and utility class. It also handles events differently, using it's own form of synthetic events.

1. Add the component(s) to the dependencies: `npm install pure-web-components --save`
2. Import the component(s) using the Stencil loader (usually near the root of the app):

```js
import { defineCustomElements } from "pure-web-components/dist/loader";

defineCustomElements(window);
```

3. Use the component inside the app:

```js
render() {
    return (
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
    )
}
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
- ✅ Create documentation
- - ✅ Test out Storybook Docs and MDX
- - ✅ Test out Gatsby using StencilJS and JSON output
- [] Remove old browser polyfills (such as CSS duplicate properties for rgba vs hex)
- [] Create more theming variables
- [] Add more themes
- - [] Dark Mode
- - [] Bootstrap
- - [] Semantic UI
