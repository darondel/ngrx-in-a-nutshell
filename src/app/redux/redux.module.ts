import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatToolbarModule } from '@angular/material';
import { ReduxShowcaseComponent } from './redux-showcase/redux-showcase.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  declarations: [
    ReduxShowcaseComponent
  ],
  exports: [
    ReduxShowcaseComponent
  ]
})
export class ReduxModule {
}
