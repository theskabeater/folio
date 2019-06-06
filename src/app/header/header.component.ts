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
                class="nav-link"
                href="https://www.github.com/theskabeater"
                target="_blank"
            >
                <fa name="github"></fa>
            </a>
            <a
                class="nav-link"
                href="https://www.linkedin.com/in/eric-moncada/"
                target="_blank"
            >
                <fa name="linkedin"></fa>
            </a>
            <a class="nav-link" href="mailto:me@ericmoncada.com">
                <fa name="envelope"></fa>
            </a>
        </div>
    `,
    styles: [
        `
            .header-actions {
                padding: 0 0.5rem;
            }

            .header-actions .nav-link {
                padding: 0 0.5rem;
            }

            :host .nav-link:hover fa {
                color: white;
            }
        `
    ]
})
export class HeaderComponent {}
