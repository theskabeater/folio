import {Component, OnInit} from '@angular/core';

@Component({
    selector: "app-navigation",
    template: `
        <clr-vertical-nav-group routerLinkActive="active">
            Work
            <clr-vertical-nav-group-children>
                <a
                    clrVerticalNavLink
                    routerLink="./work/pom-wonderful"
                    routerLinkActive="active"
                >
                    Pom Wonderful
                </a>
            </clr-vertical-nav-group-children>
        </clr-vertical-nav-group>
    `
})
export class NavigationComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
