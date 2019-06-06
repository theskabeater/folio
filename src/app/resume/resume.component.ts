import {Component} from '@angular/core';
import * as _ from 'lodash';
import {map} from 'rxjs/operators';

import {Config} from '../shared/models/content-list.model';
import {DataService} from '../shared/services/data.service';

@Component({
    selector: "app-resume",
    template: `
        <app-content>
            <ng-container skinny>
                <h2>Résumé</h2>
                <app-content-list
                    [items]="resume$ | async"
                    [config]="contentListConfig"
                >
                    <ng-template let-job #content>
                        <app-icon-item iconShape="calendar">
                            <span>{{ job.date }}</span>
                        </app-icon-item>
                        <app-icon-item iconShape="computer">
                            <span>{{ job.stack }}</span>
                        </app-icon-item>
                        <p>
                            <strong class="p4">Summary:</strong>
                            <br />
                            {{ job.description }}
                        </p>
                        <ul>
                            <li *ngFor="let item of job.list">
                                {{ item }}
                            </li>
                        </ul>
                    </ng-template>
                </app-content-list>
            </ng-container>
        </app-content>
    `
})
export class ResumeComponent {
    protected readonly contentListConfig: Config = {
        nameKey: "company",
        childKey: "items",
        childNameKey: "title"
    };

    constructor(protected readonly data: DataService) {}

    protected readonly resume$ = this.data.resume$.pipe(
        map(resumeData =>
            resumeData.map(job => ({
                ...job,
                items: [
                    _.pick(job, [
                        "title",
                        "date",
                        "description",
                        "list",
                        "stack"
                    ])
                ]
            }))
        )
    );
}
