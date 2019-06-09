import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {Project, WorkData} from 'src/app/shared/models/data.model';
import {DataService} from 'src/app/shared/services/data.service';
import {getProject, getWork} from 'src/app/shared/utils/data.utils';

type Work = WorkData & Project;

@Component({
    selector: "app-work-project",
    template: `
        <app-content *ngIf="work$ | async; let project">
            <ng-container skinny>
                <h2>{{ project.projectName }}</h2>
                <strong>{{ project.projectCredits }}</strong>
                <p class="p5 icon-list">
                    <app-icon-item iconShape="calendar">
                        {{ project.year }}
                    </app-icon-item>
                    <app-icon-item iconShape="lightbulb">
                        {{ project.role }}
                    </app-icon-item>
                    <app-icon-item iconShape="computer">
                        {{ project.stack }}
                    </app-icon-item>
                </p>
            </ng-container>
            <ng-container wide>
                <div *ngFor="let item of project.layout" class="card">
                    <figure class="card-block">
                        <img
                            class="project-image"
                            [src]="'/assets/images/' + item.image"
                        />
                        <figcaption class="p3">
                            {{ item.description }}
                        </figcaption>
                    </figure>
                </div>
            </ng-container>
        </app-content>
    `,
    styles: [
        `
            .project-image {
                width: 100%;
            }

            figure.card-block {
                margin: 0;
            }
        `
    ]
})
export class ProjectComponent {
    work$ = combineLatest(
        this.route.params,
        this.data.work$,
        this.data.projects$
    ).pipe(
        map(
            ([{ projectId }, rawWorkData, rawProjectData]): Work => {
                const work = getWork(projectId, rawWorkData);
                const project = getProject(projectId, rawProjectData);

                return {
                    ...work,
                    ...project
                };
            }
        )
    );

    constructor(
        public data: DataService,
        private readonly route: ActivatedRoute
    ) {}
}
