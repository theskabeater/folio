import {Component, OnInit} from '@angular/core';

@Component({
  selector: "[app-navigation]",
  template: `
    <section class="sidenav-content">
      <a href="/" class="nav-link active">Home</a>
    </section>
  `,
  styles: []
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
