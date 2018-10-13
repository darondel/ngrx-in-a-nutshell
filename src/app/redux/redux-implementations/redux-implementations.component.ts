import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-redux-implementations',
  templateUrl: './redux-implementations.component.html',
  styleUrls: ['./redux-implementations.component.css', '../../shared/flex-spacer.css']
})
export class ReduxImplementationsComponent implements OnInit {

  private static readonly WIDTH_UNDER_675PX: string = '(max-width: 675px)';
  private static readonly WIDTH_UNDER_950PX: string = '(max-width: 950px)';

  implementations: {name: string, description: string, link: string}[] = [
    {name: 'Redux', description: 'Original Library', link: 'https://github.com/reduxjs/redux'},
    {name: 'NgRx', description: 'Library for Angular apps', link: 'https://github.com/ngrx/platform'},
    {name: 'VueX', description: 'Library for Vue.js apps', link: 'https://github.com/vuejs/vuex'}
  ];
  cols: Observable<number>;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.cols = this.breakpointObserver.observe([
      ReduxImplementationsComponent.WIDTH_UNDER_675PX,
      ReduxImplementationsComponent.WIDTH_UNDER_950PX
    ]).pipe(
      map(state => {
        if (state.breakpoints[ReduxImplementationsComponent.WIDTH_UNDER_675PX]) {
          return 1;
        } else if (state.breakpoints[ReduxImplementationsComponent.WIDTH_UNDER_950PX]) {
          return 2;
        } else {
          return 3;
        }
      })
    );
  }

}
