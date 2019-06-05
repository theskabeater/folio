import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ClarityModule} from '@clr/angular';

import {AppContent} from './components/app-content.component';
import {IconItemComponent} from './components/icon-item.component';
import {PipesModule} from './pipes/pipes.module';

const declarations = [IconItemComponent, AppContent];
const exports = [...declarations, PipesModule, ClarityModule];

@NgModule({
    imports: [CommonModule, PipesModule, ClarityModule],
    declarations,
    exports
})
export class SharedModule {}
