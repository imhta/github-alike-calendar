import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'github-alike-calendar',
  styleUrl: 'github-alike-calendar.css',
  shadow: true
})
export class GithubAlikeCalendar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
