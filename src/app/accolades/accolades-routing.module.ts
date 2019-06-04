import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AccodalesComponent} from '../accodales/accodales.component';

const routes: Routes = [
    {
        path: "",
        component: AccodalesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccoladesRoutingModule {}
