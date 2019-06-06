import {Component} from '@angular/core';

@Component({
    selector: "app-content",
    template: `
        <div class="clr-row">
            <p class="clr-col-sm-12 clr-col-lg-7">
                <ng-content select="[skinny]"></ng-content>
            </p>
            <div class="clr-break-row">
                <p class="clr-col-sm-12 clr-col-lg-10">
                    <ng-content select="[wide]"></ng-content>
                </p>
            </div>
        </div>
    `
})
export class ContentComponent {}
