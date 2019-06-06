import {Component} from '@angular/core';
import * as _ from 'lodash';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

import {Config} from '../shared/models/content-list.model';
import {AccoladeData, AwardData, ProjectData} from '../shared/models/data.model';
import {DataService} from '../shared/services/data.service';
import {parseCredits} from '../shared/utils/data.utils';

interface Award extends AwardData {
    projectName: ProjectData["name"];
    projectUrlType: ProjectData["urlType"];
    projectUrl: ProjectData["url"];
    projectCredits: string;
}

interface Awarder extends AccoladeData {
    awards: Array<Award>;
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
                        <p class="credits p8 credits">
                            <i>{{ award.projectCredits }}</i>
                        </p>
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
    `,
    styles: [
        `
            .subheader {
                opacity: 0.6;
                margin: 0;
            }
        `
    ]
})
export class AccoladesComponent {
    accolades$ = combineLatest(this.data.accolades$, this.data.projects$).pipe(
        map(
            ([rawAccoladesData, rawProjectData]): Array<Awarder> =>
                rawAccoladesData.map(rawAccoladeData => ({
                    ...rawAccoladeData,
                    awards: rawAccoladeData.awards.map(award => {
                        const project: ProjectData = _.find(rawProjectData, {
                            id: award.projectId
                        });

                        return {
                            ...award,
                            projectName: project.name,
                            projectUrlType: project.urlType,
                            projectUrl: project.url,
                            projectCredits: parseCredits(project.credits)
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
