import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "pure-table",
  styleUrl: "pure-table.css"
})
export class PureTable {
  /**
   * Add border to table
   */
  @Prop() bordered: boolean | undefined;

  /**
   * Add stripe to table
   */
  @Prop() striped: boolean | undefined;

  /**
   * Display table horizontally
   */
  @Prop() horizontal: boolean | undefined;

  render() {
    const { bordered, striped, horizontal } = this;

    return (
      <Host
        class={{
          "pure-table": true,
          bordered: bordered !== undefined,
          striped: striped !== undefined,
          horizontal: horizontal !== undefined
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
