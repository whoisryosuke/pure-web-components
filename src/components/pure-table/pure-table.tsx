import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "pure-table",
  styleUrl: "pure-table.css",
  shadow: true
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

  /**
   * Display different HTML element or component as table wrapper
   */
  @Prop() as: string | undefined;

  render() {
    const { bordered, striped, horizontal } = this;
    const TagType = this.as === undefined ? "table" : (this.as as any);

    return (
      <Host>
        <TagType
          class={{
            "pure-table": true,
            bordered: bordered !== undefined,
            striped: striped !== undefined,
            horizontal: horizontal !== undefined
          }}
        >
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
