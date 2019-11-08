import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "pure-form",
  styleUrl: "pure-form.css",
  shadow: true
})
export class PureForm {
  /**
   * Stack form elements
   */
  @Prop() stacked: boolean;

  /**
   * Makes labels and input elements inline inside groups
   */
  @Prop() aligned: boolean;

  /**
   * HTML tag/element for form container
   */
  @Prop() as: string;

  render() {
    const { aligned, stacked } = this;
    const TagType = this.as === undefined ? "form" : (this.as as any);
    return (
      <Host
        class={{
          stacked: stacked,
          aligned: aligned
        }}
      >
        <TagType>
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
