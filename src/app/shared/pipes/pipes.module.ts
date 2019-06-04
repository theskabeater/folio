import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {CallPipe} from './call.pipe';

const declarations = [CallPipe];

@NgModule({
    imports: [CommonModule],
    declarations,
    exports: declarations
})
export class PipesModule {}
