import {Component, Input} from '@angular/core';

@Component({
    selector: "app-icon-item",
    template: `
        <div class="clr-row clr-space-between">
            <div class="clr-col-2 icon">
                <clr-icon [attr.shape]="iconShape"></clr-icon>
            </div>
            <div class="clr-col-10">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [
        `
            .icon {
                max-width: 1rem;
            }
        `
    ]
})
export class IconItemComponent {
    @Input() iconShape: string;
}
