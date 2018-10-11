import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-redux-implementations',
  templateUrl: './redux-implementations.component.html',
  styleUrls: ['./redux-implementations.component.css']
})
export class ReduxImplementationsComponent implements OnInit {

  cols: Observable<number>;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.cols = this.breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(
      map(({matches}) => matches ? 1 : 3)
    );
  }

}
