import {Component} from '@angular/core';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

import {Project, WorkData} from '../shared/models/data.model';
import {DataService} from '../shared/services/data.service';
import {getProject} from '../shared/utils/data.utils';

type WorkNavItem = WorkData & Partial<Project>;

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
        <a clrVerticalNavLink routerLink="/resume" routerLinkActive="active">
            Résumé
        </a>
        <clr-vertical-nav-group routerLinkActive="active">
            Selected Work
            <clr-vertical-nav-group-children>
                <a
                    *ngFor="let item of workNavItems$ | async"
                    [routerLink]="'/selected-work/' + item.projectId"
                    routerLinkActive="active"
                    clrVerticalNavLink
                >
                    {{ item.projectName }}
                </a>
            </clr-vertical-nav-group-children>
        </clr-vertical-nav-group>
    `
})
export class NavigationComponent {
    workNavItems$ = combineLatest(this.data.work$, this.data.projects$).pipe(
        map(
            ([rawWorkData, rawProjectData]): Array<WorkNavItem> =>
                rawWorkData.map(work => {
                    const project = getProject(work.projectId, rawProjectData);

                    return {
                        ...work,
                        ...project
                    };
                })
        )
    );

    constructor(public data: DataService) {}
}
