import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../shared/flex-spacer.css']
})
export class NavComponent implements OnInit {
  isHandset: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isHandset = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(state => state.matches));
  }
}
