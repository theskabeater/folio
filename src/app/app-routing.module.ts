import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
        path: "experience",
        loadChildren: () =>
            import("./experience/experience.module").then(
                module => module.ExperienceModule
            )
    },
    {
        path: "accolades",
        loadChildren: () =>
            import("./accolades/accolades.module").then(
                module => module.AccoladesModule
            )
    },
    {
        path: "selected-work",
        loadChildren: () =>
            import("./work/work.module").then(module => module.WorkModule)
    },
    {
        path: "resume",
        loadChildren: () =>
            import("./resume/resume.module").then(module => module.ResumeModule)
    },
    {
        path: "",
        redirectTo: "",
        pathMatch: "full",
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
