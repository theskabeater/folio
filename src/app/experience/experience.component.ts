import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

import {DataService} from '../shared/services/data.service';

@Component({
    selector: "app-experience",
    template: `
        <app-content>
            <ng-container skinny>
                <h2>Experience</h2>
                <p>
                    Below is a chart which represents some of the tech I've used
                    over my career as a software engineer. The horizontal line
                    represents the estimated, accumulative value of each
                    technology used over time in years.
                </p>
                <p>
                    The idea is to show the breadth of tech I've used as a
                    software engineer. Javascript in the frontend dev ecosystem
                    is by far my strongest skill. I've used (in production) and
                    am a fan of a lot of the popular frontend frameworks
                    including: React, Angular and Vue. But before the framework
                    invasion, I've built plenty of component based, URL and
                    state driven, single page applications.
                </p>
            </ng-container>
            <ng-container wide>
                <div class="chart-container clr-row clr-justify-content-center">
                    <div class="clr-col">
                        <ngx-charts-bar-horizontal
                            [results]="data.experience$ | async"
                            [legend]="hideLabels$ | async"
                            [legendTitle]="'Toolbox'"
                            [showXAxisLabel]="true"
                            [xAxis]="hideLabels$ | async"
                            [xAxisLabel]="'Experience in Years'"
                            [xScaleMax]="10"
                            [showYAxisLabel]="hideLabels$ | async"
                            [yAxis]="true"
                            [yAxisLabel]="'Toolbox'"
                            [scheme]="'picnic'"
                        ></ngx-charts-bar-horizontal>
                    </div>
                </div>
            </ng-container>
        </app-content>
        <app-content>
            <ng-container skinny>
                <p>
                    The majority of my career has been building design oriented,
                    visually aesthetic web applications for some of the largest
                    brands in the world. Recently, I've taken the jump to
                    product development—which I'm quite enjoying.
                </p>
                <p>
                    Product development has forced me to take a step back from
                    the fast-paced and short dev cycles common in the agency
                    world to the more methodical, process oriented world of
                    product development and design. With this change in pace,
                    I've spent a lot of time learning new programming patterns
                    that allow the flexibility and modularity needed in product
                    development.
                </p>
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
export class ExperienceComponent implements OnInit {
    hideLabels$: Observable<boolean>;

    constructor(
        public data: DataService,
        public breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this.hideLabels$ = this.breakpointObserver
            .observe([Breakpoints.Large, Breakpoints.XLarge])
            .pipe(
                map(({ matches }) => matches),
                distinctUntilChanged()
            );
    }
}
