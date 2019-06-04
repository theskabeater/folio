import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AccodalesComponent} from '../accodales/accodales.component';
import {AccoladesRoutingModule} from './accolades-routing.module';

@NgModule({
    declarations: [AccodalesComponent],
    imports: [CommonModule, AccoladesRoutingModule]
})
export class AccoladesModule {}
