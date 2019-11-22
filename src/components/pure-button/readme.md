# pure-button

Simple CSS for buttons.

## Default Buttons

To create a Pure Button, use the `<pure-button></pure-button>` web component. If you add a `href` to the component, it will automatically become a `<a>`. Or if you use the `as` property to manually set the base element (such as an `<input>`).

<pure-button href="#">A Pure Button</pure-button>
<pure-button>A Pure Button</pure-button>
<pure-button as="input" type="submit">A Pure Button</pure-button>

```html
<pure-button href="#">A Pure Button</pure-button>
<pure-button>A Pure Button</pure-button>
<pure-button as="input" type="submit">A Pure Button</pure-button>
```

## Disabled Buttons

To mark a button as disabled, add the `disabled` property alongside `pure-button`. Alternatively, add the "disabled" attribute directly to your button.

<pure-button href="#" disabled>A Pure Button</pure-button>
<pure-button disabled>A Pure Button</pure-button>
<pure-button as="input" type="submit" disabled>A Pure Button</pure-button>

```html
<pure-button href="#" disabled>A Pure Button</pure-button>
<pure-button disabled>A Pure Button</pure-button>
<pure-button as="input" type="submit" disabled>A Pure Button</pure-button>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                         | Type                              | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------- |
| `as`       | `as`       | HTML element to use as basis                                                                                                                        | `string`                          | `undefined` |
| `color`    | `color`    | Background color                                                                                                                                    | `string`                          | `undefined` |
| `disabled` | `disabled` | Is disabled?                                                                                                                                        | `boolean`                         | `undefined` |
| `href`     | `href`     | Displays button as link                                                                                                                             | `string`                          | `undefined` |
| `target`   | `target`   | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`. | `string`                          | `undefined` |
| `type`     | `type`     | The button or input type (usually submit)                                                                                                           | `"button" \| "reset" \| "submit"` | `undefined` |
| `value`    | `value`    | Optional prop for input to show text                                                                                                                | `string`                          | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
