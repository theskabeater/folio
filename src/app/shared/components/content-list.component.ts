import {Component, ContentChild, Input, TemplateRef} from '@angular/core';

import {Config, Item} from '../models/content-list.model';

@Component({
    selector: "app-content-list",
    template: `
        <ul class="list-unstyled">
            <li *ngFor="let item of items">
                <h4>
                    <a [href]="item.url" target="_blank">
                        {{ item[config.nameKey] }}
                    </a>
                </h4>
                <div
                    *ngFor="let child of item[config.childKey]"
                    class="children"
                >
                    <h6>{{ child[config.childNameKey] }}</h6>
                    <ng-content
                        *ngTemplateOutlet="
                            subheader;
                            context: { $implicit: child }
                        "
                    ></ng-content>
                    <p class="p5">
                        <ng-content
                            *ngTemplateOutlet="
                                content;
                                context: { $implicit: child }
                            "
                        ></ng-content>
                    </p>
                </div>
            </li>
        </ul>
    `,
    styles: [
        `
            .children,
            .children .p5 {
                padding-left: 0.5rem;
            }
        `
    ]
})
export class ContentListComponent {
    @ContentChild("subheader", { static: true }) subheader: TemplateRef<any>;
    @ContentChild("content", { static: true }) content: TemplateRef<any>;
    @Input() items: Array<Item>;
    @Input() config: Config;
}
