import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
        path: "accolades",
        loadChildren: () =>
            import("./accolades/accolades.module").then(
                module => module.AccoladesModule
            )
    },
    {
        path: "work",
        loadChildren: () =>
            import("./work/work.module").then(module => module.WorkModule)
    },
    {
        path: "",
        redirectTo: "",
        pathMatch: "full",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
