import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "pure-base",
  styleUrl: "pure-base.scss"
})
export class PureBase {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
