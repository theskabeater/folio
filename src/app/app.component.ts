import {Component} from '@angular/core';

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
export class AppComponent {}
