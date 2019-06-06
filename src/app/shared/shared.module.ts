import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';

import {ContentListComponent} from './components/content-list.component';
import {ContentComponent} from './components/content.component';
import {IconItemComponent} from './components/icon-item.component';
import {PipesModule} from './pipes/pipes.module';

const declarations = [
    IconItemComponent,
    ContentComponent,
    ContentListComponent
];
const exports = [...declarations, PipesModule, ClarityModule];

@NgModule({
    imports: [CommonModule, PipesModule, ClarityModule],
    declarations,
    exports
})
export class SharedModule {}
