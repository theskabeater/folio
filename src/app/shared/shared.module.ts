import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {PipesModule} from './pipes/pipes.module';

@NgModule({
    imports: [CommonModule, PipesModule],
    exports: [PipesModule]
})
export class SharedModule {}
