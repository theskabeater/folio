import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccoladesComponent} from './accolades.component';

const routes: Routes = [
    {
        path: "",
        component: AccoladesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccoladesRoutingModule {}
