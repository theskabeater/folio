import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProjectData, WorkData} from 'src/app/shared/models/data.model';
import {DataService} from 'src/app/shared/services/data.service';
import {parseCredits} from 'src/app/shared/utils/data.utils';

interface Project extends WorkData {
    projectName: ProjectData["name"];
    projectCredits: string;
}

@Component({
    selector: "app-work-project",
    template: `
        <ng-container *ngIf="project$ | async; let project">
            <h2>{{ project.projectName }}</h2>
            <strong>{{ project.credits }}</strong>
            <p>
                <clr-icon shape="calendar"></clr-icon> {{ project.year }}
                <br />
                <clr-icon shape="lightbulb"></clr-icon> {{ project.role }}
                <br />
                <clr-icon shape="computer"></clr-icon> {{ project.stack }}
            </p>
            <div *ngFor="let item of project.layout" class="card">
                <figure class="card-block">
                    <img
                        class="project-image"
                        [src]="'/assets/work/' + item.image"
                    />
                    <figcaption class="p3">{{ item.description }}</figcaption>
                </figure>
            </div>
        </ng-container>
    `,
    styles: [
        `
            .project-image {
                width: 100%;
            }
        `
    ]
})
export class ProjectComponent {
    project$ = combineLatest(
        this.data.work$,
        this.data.projects$,
        this.route.url
    ).pipe(
        map(
            ([rawWorkData, rawProjectData, routeSegments]): Project => {
                const workData: WorkData = _.find(rawWorkData, {
                    projectId: _.first(routeSegments).path
                });

                const projectData: ProjectData = _.find(rawProjectData, {
                    id: workData.projectId
                });

                return {
                    ...workData,
                    projectName: projectData.name,
                    projectCredits: parseCredits(projectData.credits)
                };
            }
        )
    );

    constructor(
        protected readonly data: DataService,
        private readonly route: ActivatedRoute
    ) {}
}
