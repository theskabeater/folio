import {Component} from '@angular/core';

@Component({
  selector: "app-root",
  template: `
    <clr-main-container>
      <clr-header class="header-1">
        <app-header></app-header>
      </clr-header>

      <div class="content-container">
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>

        <nav app-navigation class="sidenav"></nav>
      </div>
    </clr-main-container>
  `,
  styles: []
})
export class AppComponent {}
