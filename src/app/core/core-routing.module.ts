import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoDashboardComponent } from '../todo/todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  {path: 'demonstration', component: TodoDashboardComponent},
  {path: '', redirectTo: '/demonstration', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
