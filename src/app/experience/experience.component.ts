import {Component} from '@angular/core';

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
                            [results]="results"
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
    results = [
        {
            name: "Javascript",
            value: 9
        },
        {
            name: "RxJS",
            value: 1.6
        },
        {
            name: "Typescript",
            value: 1.6
        },
        {
            name: "Angular",
            value: 1.6
        },
        {
            name: "React",
            value: 2
        },
        {
            name: "Vue",
            value: 0.5
        },
        {
            name: "Creative Development",
            value: 8
        },
        {
            name: "AS3",
            value: 3
        },
        {
            name: "Objective-C (iOS)",
            value: 1.3
        },
        {
            name: "Programming",
            value: 10
        },
        {
            name: "Frontend",
            value: 10
        },
        {
            name: "Backend",
            value: 4.2
        },
        {
            name: "Python (Django)",
            value: 0.5
        },
        {
            name: "Ruby (Rails)",
            value: 0.8
        },
        {
            name: "Node (Keystone, Express)",
            value: 0.8
        },
        {
            name: "PHP (WordPress, Laravel)",
            value: 3
        }
    ];
}
