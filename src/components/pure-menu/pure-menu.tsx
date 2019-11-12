import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "pure-menu",
  styleUrl: "pure-menu.css",
  shadow: true
})
export class PureMenu {
  /**
   * Display menu items horizontally
   */
  @Prop() horizontal: boolean | undefined;

  /**
   * Add a scrollbar for overflowed menu content
   */
  @Prop() scrollable: boolean | undefined;

  /**
   * Display different HTML element or component as table wrapper
   */
  @Prop() as: string | undefined;

  /**
   * Display a heading
   */
  @Prop() heading: string | undefined;

  /**
   * Display a heading
   */
  @Prop() headingUrl: string | undefined;

  /**
   * Display a heading
   */
  @Prop() headingPosition: "invert" | undefined;

  /**
   * Display a heading
   */
  @Prop() list: Array;

  render() {
    const {
      heading,
      headingUrl,
      headingPosition,
      list,
      scrollable,
      horizontal
    } = this;
    const TagType = this.as === undefined ? "nav" : (this.as as any);
    const pureHeading = (
      <a href="#" class="pure-menu-heading pure-menu-link">
        {heading}
      </a>
    );

    /**
     * Outputs a menu item
     * @param menuItem Object
     */
    const createMenuItem = menuItem => {
      // If URL is set, wrap in link
      console.log("rendering", menuItem);
      if ("url" in menuItem && menuItem.url !== undefined) {
        return (
          <li class="pure-menu-item">
            <a href={menuItem.url} class="pure-menu-link">
              {menuItem.name}
            </a>
          </li>
        );
      } else {
        return <li class="pure-menu-item">{menuItem.name}</li>;
      }
    };

    const checkDropdown = menuItem => {
      console.log("checking dropdown");
      if (
        "dropdown" in menuItem &&
        Array.isArray(menuItem.dropdown) &&
        menuItem.dropdown.length > 0
      ) {
        console.log("dropdown found", menuItem);
        return (
          <li class="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a
              href={"url" in menuItem && menuItem.url}
              id="menuLink1"
              class="pure-menu-link"
            >
              {menuItem.name}
            </a>
            <ul class="pure-menu-children">
              {menuItem.dropdown.map(dropdownItem =>
                createMenuItem(dropdownItem)
              )}
            </ul>
          </li>
        );
      } else {
        console.log("no dropdown found", menuItem);
        createMenuItem(menuItem);
      }
    };

    return (
      <Host>
        <TagType
          class={{
            "pure-menu": true,
            scrollable: scrollable !== undefined,
            horizontal: horizontal !== undefined
          }}
        >
          {heading && pureHeading}
          {list && (
            <ul class="pure-menu-list">
              {list.map(menuItem => checkDropdown(menuItem))}
            </ul>
          )}
        </TagType>
      </Host>
    );
  }
}
