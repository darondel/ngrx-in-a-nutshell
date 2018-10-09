import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

import { CoreRoutingModule } from './core-routing.module';
import { TodoModule } from '../todo/todo.module';

import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    TodoModule
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule {
}
