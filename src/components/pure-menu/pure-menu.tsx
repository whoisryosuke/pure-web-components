import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "pure-menu",
  styleUrl: "pure-menu.css"
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

  render() {
    const { scrollable, horizontal } = this;

    return (
      <Host
        class={{
          "pure-menu": true,
          scrollable: scrollable !== undefined,
          horizontal: horizontal !== undefined
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
