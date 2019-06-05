import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {SharedModule} from '../shared/shared.module';
import {ExperienceRoutingModule} from './experience-routing.module';
import {ExperienceComponent} from './experience.component';

@NgModule({
    declarations: [ExperienceComponent],
    imports: [
        CommonModule,
        ExperienceRoutingModule,
        NgxChartsModule,
        ClarityModule,
        SharedModule
    ]
})
export class ExperienceModule {}
