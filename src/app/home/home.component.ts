import {Component} from '@angular/core';

import {fileHash} from '../shared/utils/app.utils';

@Component({
    selector: "app-home",
    template: `
        <app-content>
            <ng-container skinny>
                <h2>Hello</h2>
                <p>
                    My name is <strong>Eric Moncada</strong> and I'm a Senior
                    Software Engineer currently working at
                    <strong>SaltStack</strong>.
                </p>
                <figure
                    class="me"
                    [style.backgroundImage]="backgroundImage"
                ></figure>
                <p>
                    Originally from Southern California, in 2010 I moved to Salt
                    Lake City, Utah in pursuit of a career in software
                    development. Since then I've had the privilege to work with
                    some of the very best engineers in the digital-agency scene.
                    I've also been able to do work for some of the world's
                    largest brands including: Google, PepsiCo, Viacom and
                    Microsoft.
                </p>
                <p>
                    This website showcases some of the projects that I've been a
                    part of. I've also included my
                    <a [routerLink]="'/resume'">résumé</a> just in case you were
                    curious 😉
                </p>
                <p>
                    Feel free to checkout my
                    <a href="https://github.com/theskabeater" target="_blank"
                        >GitHub</a
                    >
                    page which has some personal projects that I'm working on,
                    including this portfolio. Feel free to
                    <a href="mailto:me@ericmoncada.com">email</a> me if you have
                    any questions.
                </p>
            </ng-container>
        </app-content>
    `,
    styles: [
        `
            .me {
                width: 150px;
                height: 150px;
                overflow: hidden;
                background-repeat: no-repeat;
                background-size: contain;
                border-radius: 50%;
                border: 2px solid black;
                overflow: hidden;
                margin: 1rem auto;
            }
        `
    ]
})
export class HomeComponent {
    backgroundImage = `url('/assets/images/me${fileHash}.jpg')`;
}
