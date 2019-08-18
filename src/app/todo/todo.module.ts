import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoEffects } from './store/effects/todo.effects';
import { todoReducer } from './store/reducers/todo.reducer';

import { TodoCounterComponent } from './todo-counter/todo-counter.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoStateComponent } from './todo-state/todo-state.component';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([TodoEffects]),
    LayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('todo', todoReducer),
    TodoRoutingModule
  ],
  declarations: [
    TodoCounterComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoStateComponent
  ],
  exports: [TodoDashboardComponent]
})
export class TodoModule {}
