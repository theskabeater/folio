import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {SharedModule} from '../shared/shared.module';
import {AccoladesRoutingModule} from './accolades-routing.module';
import {AccoladesComponent} from './accolades.component';

@NgModule({
    declarations: [AccoladesComponent],
    imports: [
        CommonModule,
        AngularFontAwesomeModule,
        ClarityModule,
        AccoladesRoutingModule,
        SharedModule
    ]
})
export class AccoladesModule {}
