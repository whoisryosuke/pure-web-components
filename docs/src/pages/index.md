---
title: Pure Web Components
date: "2019-11-22"
---

<header className="PageHeader">
  <h1><img src="./img/Pure Web Components - Horizontal.png" width="80%"/></h1>
  <h2>A set of small, responsive CSS modules that you can use in every web project.</h2>
</header>

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/purecss@1.0.1/build/pure-min.css"
  integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47"
  crossorigin="anonymous"
/>
```

<p style="text-align:center">
  <pure-button color="primary" class="button-cta" href="/start/">Get Started</pure-button>
  <pure-button color="secondary" href="https://github.com/pure-css/pure/">View on GitHub</pure-button>
</p>

<pure-grid>
  <div class="size-chart">
    <div class="size-chart-base pure-u" style="width: 20.0222%;">
        <a class="size-chart-item" href="/base/">
            <span class="size-chart-label">
                <span class="size-chart-mod">base</span>
                <span class="size-chart-size">8KB</span>
            </span>
        </a>
    </div>
    <div class="size-chart-grids pure-u" style="width: 14.6977%;">
        <a class="size-chart-item" href="/grids/">
            <span class="size-chart-label">
                <span class="size-chart-mod">grids</span>
                <span class="size-chart-size">15KB</span>
            </span>
        </a>
    </div>
    <div class="size-chart-forms pure-u" style="width: 27.0105%;">
        <a class="size-chart-item" href="/forms/">
            <span class="size-chart-label">
                <span class="size-chart-mod">forms</span>
                <span class="size-chart-size">8KB</span>
            </span>
        </a>
    </div>
    <div class="size-chart-buttons pure-u" style="width: 15.4187%;">
        <a class="size-chart-item" href="/buttons/">
            <span class="size-chart-label">
                <span class="size-chart-mod">buttons</span>
                <span class="size-chart-size">3KB</span>
            </span>
        </a>
    </div>
    <div class="size-chart-tables pure-u" style="width: 8.6338%;">
        <a class="size-chart-item" href="/tables/">
            <span class="size-chart-label">
                <span class="size-chart-mod">tables</span>
                <span class="size-chart-size">4KB</span>
            </span>
        </a>
    </div>
    <div class="size-chart-menus pure-u" style="width: 14.2170%;">
        <a class="size-chart-item" href="/menus/">
            <span class="size-chart-label">
                <span class="size-chart-mod">menus</span>
                <span class="size-chart-size">4KB</span>
            </span>
        </a>
    </div>
  </div>
</pure-grid>

## Add Pure to Your Page

You can add Pure to your page via the **free unpkg CDN**. Just add the following `<link>` element into your page's `<head>`, before your project's stylesheets.

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/purecss@1.0.1/build/pure-min.css"
  integrity="sha384-oAOxQR6DkCoMliIh8yFnu25d7Eq/PHS21PClpwjOTeU2jRSq11vu66rf90/cZr47"
  crossorigin="anonymous"
/>
```

<aside><p>Alternatively, you can <a href="https://github.com/pure-css/pure-release/archive/v1.0.1.zip">download Pure</a>, or <a href="https://purecss.io/customize/">check out other CDNs</a> that host Pure.</p></aside>

## Add the Viewport Meta Element

The viewport `meta` element lets you control the the width and scale of the viewport on mobile browsers. Since you're building a responsive website, you want the width to be equal to the device's native width. Add this into your page's `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## Understand Pure Grids

Pure's grid system is very simple. You create a row by using the `.pure-g` class, and create columns within that row by using the `pure-u-*` classes.

Here's a grid with three columns:

```html
<div class="pure-g">
  <div class="pure-u-1-3"><p>Thirds</p></div>
  <div class="pure-u-1-3"><p>Thirds</p></div>
  <div class="pure-u-1-3"><p>Thirds</p></div>
</div>
```

## Responsive Grids

Pure's grid system is also **mobile-first** and **responsive**, and you're able to customize the grid by specifying CSS Media Query breakpoints and grid classnames. If needed, you can [customize Pure Grids below](https://purecss.io/start/#build-your-pure-starter-kit), but let's start off with an example.

You'll need to _also_ include Pure's `grids-responsive.css` onto your page:

```html
<!--[if lte IE 8]>
  <link
    rel="stylesheet"
    href="https://unpkg.com/purecss@1.0.1/build/grids-responsive-old-ie-min.css"
  />
<![endif]-->
<!--[if gt IE 8]><!-->
<link
  rel="stylesheet"
  href="https://unpkg.com/purecss@1.0.1/build/grids-responsive-min.css"
/>
<!--<![endif]-->
```

Here's the default responsive breakpoints included in `grids-responsive.css`:

| Key  | CSS Media Query                         | Applies  | Classname      |
| ---- | --------------------------------------- | -------- | -------------- |
| None | None                                    | Always   | `.pure-u-*`    |
| `sm` | `@media screen and (min-width: 35.5em)` | ≥ 568px  | `.pure-u-sm-*` |
| `md` | `@media screen and (min-width: 48em)`   | ≥ 768px  | `.pure-u-md-*` |
| `lg` | `@media screen and (min-width: 64em)`   | ≥ 1024px | `.pure-u-lg-*` |
| `xl` | `@media screen and (min-width: 80em)`   | ≥ 1280px | `.pure-u-xl-*` |

Here's an example of what you'd be able to do. _Try resizing your screen to see how the grid responds._

<div class="grids-example">
    <pure-grid>
        <div class="pure-u-1">.pure-u-1</div>
        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            .pure-u-1<br>.pure-u-md-1-2<br>.pure-u-lg-1-4
        </div>
        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            .pure-u-1<br>.pure-u-md-1-2<br>.pure-u-lg-1-4
        </div>
        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            .pure-u-1<br>.pure-u-md-1-2<br>.pure-u-lg-1-4
        </div>
        <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            .pure-u-1<br>.pure-u-md-1-2<br>.pure-u-lg-1-4
        </div>
        <div class="pure-u-1 pure-u-md-3-4">.pure-u-1<br>.pure-u-md-3-4</div>
        <div class="pure-u-1 pure-u-md-1-4">.pure-u-1<br>.pure-u-md-1-4</div>
    </pure-grid>
</div>

<aside><p><a href="https://purecss.io/grids/#pure-responsive-grids">Learn More</a> about how to include and use Pure's Responsive Grids system, and how it compares to Basic Grids.</p></aside>

## Build Your Pure Starter Kit

Now that you know how grids work, you might want to customize things to better suit your web project. You can define your own breakpoints by specifying a CSS Media Queries. You can also customize the number of columns that your layout needs.

We'll generate an `index.html` file, and if needed, a `grid.css` file that you can download and use as the starting-point for your project.
