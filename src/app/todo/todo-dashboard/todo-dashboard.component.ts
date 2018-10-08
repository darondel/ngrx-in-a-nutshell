import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {

  bottomCols: Observable<number>;

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
    this.bottomCols = this.breakpointObserver.observe(Breakpoints.HandsetPortrait).pipe(
      map(({matches}) => matches ? 3 : 1)
    );
  }

}
