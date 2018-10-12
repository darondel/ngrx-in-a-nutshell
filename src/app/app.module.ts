import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { TodoEffects } from './todo/store/effects/todo.effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([TodoEffects]),
    CoreModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
