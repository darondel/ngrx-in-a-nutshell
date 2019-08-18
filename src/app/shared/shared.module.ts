import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScrollableMatCardDirective } from './scrollable-mat-card.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollableMatCardDirective],
  exports: [ScrollableMatCardDirective]
})
export class SharedModule {}
