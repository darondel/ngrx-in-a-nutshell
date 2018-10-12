import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatExpansionModule, MatGridListModule, MatStepperModule, MatToolbarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { ReduxImplementationsComponent } from './redux-implementations/redux-implementations.component';
import { ReduxPrinciplesComponent } from './redux-principles/redux-principles.component';
import { ReduxSectionComponent } from './redux-section/redux-section.component';
import { ReduxShowcaseComponent } from './redux-showcase/redux-showcase.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatToolbarModule
  ],
  declarations: [
    ReduxImplementationsComponent,
    ReduxPrinciplesComponent,
    ReduxSectionComponent,
    ReduxShowcaseComponent
  ],
  exports: [
    ReduxShowcaseComponent
  ]
})
export class ReduxModule {
}
