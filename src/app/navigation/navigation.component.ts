import {Component, OnInit} from '@angular/core';

@Component({
    selector: "app-navigation",
    template: `
        <a
            clrVerticalNavLink
            routerLink="/experience"
            routerLinkActive="active"
        >
            Experience
        </a>
        <a clrVerticalNavLink routerLink="/accolades" routerLinkActive="active">
            Accolades
        </a>
        <clr-vertical-nav-group routerLinkActive="active">
            Work
            <clr-vertical-nav-group-children>
                <a
                    clrVerticalNavLink
                    routerLink="/work/pom-wonderful"
                    routerLinkActive="active"
                >
                    Pom Wonderful
                </a>
            </clr-vertical-nav-group-children>
        </clr-vertical-nav-group>
        <a clrVerticalNavLink routerLink="/resume" routerLinkActive="active">
            Résumé
        </a>
    `
})
export class NavigationComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
