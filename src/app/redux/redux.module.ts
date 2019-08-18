import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    MatIconModule,
    MatStepperModule,
    MatToolbarModule
  ],
  declarations: [
    ReduxImplementationsComponent,
    ReduxPrinciplesComponent,
    ReduxSectionComponent,
    ReduxShowcaseComponent
  ],
  exports: [ReduxShowcaseComponent]
})
export class ReduxModule {}
