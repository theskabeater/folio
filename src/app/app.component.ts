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
                    <div class="clr-row">
                        <div class="clr-col-sm-12 clr-col-lg-8">
                            <router-outlet></router-outlet>
                        </div>
                    </div>
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
