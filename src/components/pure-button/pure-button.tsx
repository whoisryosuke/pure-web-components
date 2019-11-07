import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "pure-button",
  styleUrl: "pure-button.css",
  shadow: true
})
export class PureButton {
  /**
   * Background color
   */
  @Prop() color: string;

  /**
   * Background color
   */
  @Prop() href: boolean;

  render() {
    const { color, href } = this;
    const TagType = href === undefined ? "button" : ("a" as any);
    return (
      <TagType class={{ "pure-button": true, [color]: true }}>
        <slot />
      </TagType>
    );
  }
}
