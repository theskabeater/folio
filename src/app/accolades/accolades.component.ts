import {Component} from '@angular/core';
import * as _ from 'lodash';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

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
                <ul class="list-unstyled">
                    <li
                        *ngFor="let awarder of accolades$ | async"
                        class="awarder"
                    >
                        <h4>
                            <a [href]="awarder.url" target="_blank">
                                {{ awarder.name }}
                            </a>
                        </h4>
                        <div
                            *ngFor="let award of awarder.awards"
                            class="awards"
                        >
                            <h6>{{ award.projectName }}</h6>
                            <p class="credits p8">
                                <i>{{ award.projectCredits }}</i>
                            </p>
                            <p class="p5">
                                <app-icon-item iconShape="star">
                                    <a [href]="award.url" target="_blank">
                                        {{ award.accolade }}
                                    </a>
                                </app-icon-item>
                                <app-icon-item iconShape="calendar">
                                    <span>{{ award.date }}</span>
                                </app-icon-item>
                                <app-icon-item iconShape="link">
                                    <a
                                        [href]="award.projectUrl"
                                        target="_blank"
                                    >
                                        {{ award.projectUrlType }}
                                    </a>
                                </app-icon-item>
                            </p>
                        </div>
                    </li>
                </ul>
            </ng-container>
        </app-content>
    `,
    styles: [
        `
            .awards,
            .awards .p5 {
                padding-left: 0.5rem;
            }

            .credits {
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

    constructor(protected readonly data: DataService) {}
}
