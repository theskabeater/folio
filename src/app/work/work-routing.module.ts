import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProjectComponent} from './project/project.component';
import {WorkComponent} from './work.component';

const routes: Routes = [
    {
        path: "",
        component: WorkComponent,
        children: [
            {
                path: "pom-wonderful",
                component: ProjectComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule {}
