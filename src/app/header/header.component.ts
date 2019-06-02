import {Component, OnInit} from '@angular/core';

@Component({
  selector: "app-header",
  template: `
    <div class="branding">
      <a href="/" class="nav-link">
        <clr-icon shape="keyboard" class="is-inverse"></clr-icon>
        <span class="title">
          ericmoncada
        </span>
      </a>
    </div>
    <div class="header-actions">
      <a class="nav-link nav-text" href="mailto:me@ericmoncada.com">
        me@ericmoncada.com
      </a>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex: 1;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
