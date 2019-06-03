import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {DataService} from 'src/app/shared/data.service';

@Component({
    selector: "app-work-project",
    template: `
        <ng-container *ngIf="project$ | async; let project">
            <h2>{{ project.name }}</h2>
            <strong>{{ project.company }}</strong>
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
    project$ = combineLatest(this.data.work$, this.route.url).pipe(
        map(([data, routeSegments]) =>
            _.find(data, { slug: _.first(routeSegments).path })
        )
    );

    constructor(
        protected readonly data: DataService,
        private readonly route: ActivatedRoute
    ) {}
}
