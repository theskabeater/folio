import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: "app-root",
    template: `
        <clr-main-container>
            <clr-header>
                <app-header></app-header>
            </clr-header>
            <div class="content-container">
                <div class="content-area">
                    <router-outlet></router-outlet>
                </div>
                <clr-vertical-nav [clr-nav-level]="1">
                    <app-navigation></app-navigation>
                </clr-vertical-nav>
            </div>
        </clr-main-container>
    `,
    styles: [
        `
            app-header {
                display: flex;
                flex: 1;
            }
        `
    ]
})
export class AppComponent {
    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                window["gtag"]("config", "UA-141730595-1", {
                    page_path: event.urlAfterRedirects
                });
            }
        });
    }
}
