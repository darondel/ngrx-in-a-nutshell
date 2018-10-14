import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-redux-section',
  templateUrl: './redux-section.component.html',
  styleUrls: ['./redux-section.component.css']
})
export class ReduxSectionComponent implements OnInit {

  @Input() section: string;

  isExpanded: Observable<boolean>;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  private get sectionFragment(): string {
    return this.section.toLowerCase();
  }

  ngOnInit() {
    this.isExpanded = this.route.fragment.pipe(
      map(fragment => fragment && fragment.toLowerCase() === this.sectionFragment)
    );
  }

  onClick() {
    this.router.navigate(['./'], {
      ...(this.route.snapshot.fragment === this.sectionFragment ? {} : {fragment: this.sectionFragment}),
      relativeTo: this.route
    });
  }

}
