import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';
import { TodoStateComponent } from './todo-state/todo-state.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule
  ],
  declarations: [
    TodoCounterComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoStateComponent
  ],
  exports: [
    TodoDashboardComponent
  ]
})
export class TodoModule {
}
