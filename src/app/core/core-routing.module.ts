import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReduxModule } from '../redux/redux.module';

import { ReduxShowcaseComponent } from '../redux/redux-showcase/redux-showcase.component';

const routes: Routes = [
  {path: 'presentation', component: ReduxShowcaseComponent},
  {path: 'demonstration', loadChildren: '../todo/todo.module#TodoModule'},
  {path: '', redirectTo: '/presentation', pathMatch: 'full'}
];

@NgModule({
  imports: [
    ReduxModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {
}
