import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';

import {ProjectComponent} from './project/project.component';
import {WorkRoutingModule} from './work-routing.module';
import {WorkComponent} from './work.component';

@NgModule({
    declarations: [WorkComponent, ProjectComponent],
    imports: [CommonModule, WorkRoutingModule, ClarityModule]
})
export class WorkModule {}
