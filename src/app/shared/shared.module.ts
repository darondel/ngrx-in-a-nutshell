import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollableMatCardDirective } from './scrollable-mat-card.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollableMatCardDirective
  ],
  exports: [
    ScrollableMatCardDirective
  ]
})
export class SharedModule {
}
