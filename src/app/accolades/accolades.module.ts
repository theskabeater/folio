import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AccodalesComponent} from '../accodales/accodales.component';
import {SharedModule} from '../shared/shared.module';
import {AccoladesRoutingModule} from './accolades-routing.module';

@NgModule({
    declarations: [AccodalesComponent],
    imports: [
        CommonModule,
        AngularFontAwesomeModule,
        ClarityModule,
        AccoladesRoutingModule,
        SharedModule
    ]
})
export class AccoladesModule {}
