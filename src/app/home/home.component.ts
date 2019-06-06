import {Component} from '@angular/core';

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
                <figure class="me"></figure>
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
        </app-content>
    `,
    styles: [
        `
            .me {
                width: 150px;
                height: 150px;
                overflow: hidden;
                background-image: url(/assets/images/me.jpg);
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
export class HomeComponent {}
