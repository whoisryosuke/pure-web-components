import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'pure-base',
  styleUrl: 'pure-base.scss',
  shadow: true
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
