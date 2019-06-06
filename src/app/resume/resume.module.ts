import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {ResumeRoutingModule} from './resume-routing.module';
import {ResumeComponent} from './resume.component';

@NgModule({
    declarations: [ResumeComponent],
    imports: [CommonModule, ResumeRoutingModule, SharedModule]
})
export class ResumeModule {}
