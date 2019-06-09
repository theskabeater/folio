import {Component} from '@angular/core';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

import {Config} from '../shared/models/content-list.model';
import {AccoladeData, AwardData, Project} from '../shared/models/data.model';
import {DataService} from '../shared/services/data.service';
import {getProject} from '../shared/utils/data.utils';

interface Awarder extends AccoladeData {
    awards: Array<Project & AwardData>;
}

@Component({
    selector: "app-accodales",
    template: `
        <app-content>
            <ng-container skinny>
                <h2>
                    Accolades
                </h2>
                <app-content-list
                    [items]="accolades$ | async"
                    [config]="contentListConfig"
                >
                    <ng-template let-award #subheader>
                        <i class="p8">{{ award.projectCredits }}</i>
                    </ng-template>
                    <ng-template let-award #content>
                        <app-icon-item iconShape="star">
                            <a [href]="award.url" target="_blank">
                                {{ award.accolade }}
                            </a>
                        </app-icon-item>
                        <app-icon-item iconShape="calendar">
                            <span>{{ award.date }}</span>
                        </app-icon-item>
                        <app-icon-item iconShape="link">
                            <a [href]="award.projectUrl" target="_blank">
                                {{ award.projectUrlType }}
                            </a>
                        </app-icon-item>
                    </ng-template>
                </app-content-list>
            </ng-container>
        </app-content>
    `
})
export class AccoladesComponent {
    accolades$ = combineLatest(this.data.accolades$, this.data.projects$).pipe(
        map(
            ([rawAccoladesData, rawProjectData]): Array<Awarder> =>
                rawAccoladesData.map(rawAccoladeData => ({
                    ...rawAccoladeData,
                    awards: rawAccoladeData.awards.map(award => {
                        const project = getProject(
                            award.projectId,
                            rawProjectData
                        );

                        return {
                            ...award,
                            ...project
                        };
                    })
                }))
        )
    );

    contentListConfig: Config = {
        nameKey: "name",
        childKey: "awards",
        childNameKey: "projectName"
    };

    constructor(public data: DataService) {}
}
