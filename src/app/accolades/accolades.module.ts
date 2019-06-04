import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AccodalesComponent} from '../accodales/accodales.component';
import {AccoladesRoutingModule} from './accolades-routing.module';

@NgModule({
    declarations: [AccodalesComponent],
    imports: [
        CommonModule,
        AngularFontAwesomeModule,
        ClarityModule,
        AccoladesRoutingModule
    ]
})
export class AccoladesModule {}
