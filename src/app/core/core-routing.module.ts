import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReduxModule } from '../redux/redux.module';
import { TodoModule } from '../todo/todo.module';

import { ReduxShowcaseComponent } from '../redux/redux-showcase/redux-showcase.component';
import { TodoDashboardComponent } from '../todo/todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  {path: 'presentation', component: ReduxShowcaseComponent},
  {path: 'demonstration', component: TodoDashboardComponent},
  {path: '', redirectTo: '/presentation', pathMatch: 'full'}
];

@NgModule({
  imports: [
    TodoModule,
    ReduxModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
