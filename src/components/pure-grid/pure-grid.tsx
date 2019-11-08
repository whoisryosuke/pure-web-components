import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "pure-grid",
  styleUrl: "pure-grid.scss",
  shadow: true
})
export class PureGrid {
  /**
   * HTML tag/element for form container
   */
  @Prop() as: string;

  render() {
    const TagType = this.as === undefined ? "div" : (this.as as any);
    return (
      <Host>
        <TagType class="pure-g">
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
