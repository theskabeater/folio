import {Component} from '@angular/core';

@Component({
    selector: "app-header",
    template: `
        <div class="branding">
            <a routerLink="/" class="nav-link">
                <span class="title">
                    Eric Moncada
                </span>
            </a>
        </div>
        <div class="header-actions">
            <a
                class="nav-link nav-text"
                href="https:www.github.com/theskabeater"
                target="_blank"
            >
                <fa name="github" size="2x"></fa>
            </a>
            <a
                class="nav-link nav-text"
                href="https://www.linkedin.com/in/eric-moncada/"
                target="_blank"
            >
                <fa name="linkedin" size="2x"></fa>
            </a>
            <a class="nav-link nav-text" href="mailto:me@ericmoncada.com">
                <fa name="envelope" size="2x"></fa>
            </a>
        </div>
    `
})
export class HeaderComponent {}
