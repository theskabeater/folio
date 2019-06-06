import {Component} from '@angular/core';

import {DataService} from '../shared/services/data.service';

@Component({
    selector: "app-experience",
    template: `
        <app-content>
            <ng-container skinny>
                <h2>Experience</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </ng-container>
            <ng-container wide>
                <div class="chart-container clr-row clr-justify-content-center">
                    <div class="clr-col">
                        <ngx-charts-bar-horizontal
                            [results]="data.experience$ | async"
                            [legendTitle]="'Toolbox'"
                            [xAxisLabel]="'Experience in Years'"
                            [yAxisLabel]="'Toolbox'"
                            [legend]="true"
                            [scheme]="'picnic'"
                            [xAxis]="true"
                            [yAxis]="true"
                            [showXAxisLabel]="true"
                            [showYAxisLabel]="true"
                            [xScaleMax]="10"
                        ></ngx-charts-bar-horizontal>
                    </div>
                </div>
            </ng-container>
        </app-content>
    `,
    styles: [
        `
            .chart-container {
                margin-top: 1rem;
                height: 60vh;
            }
        `
    ]
})
export class ExperienceComponent {
    constructor(protected readonly data: DataService) {}
}
