import { Component, Input, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ReduxSection } from '../store/models/redux.model';
import { AppState, isReduxSectionSelected } from '../../app.reducer';
import { SelectSection } from '../store/actions/redux.actions';

@Component({
  selector: 'app-redux-section',
  templateUrl: './redux-section.component.html',
  styleUrls: ['./redux-section.component.css']
})
export class ReduxSectionComponent implements OnInit {

  @Input() section: ReduxSection;

  isExpanded: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.isExpanded = this.store.pipe(
      select(isReduxSectionSelected, {section: this.section})
    );
  }

  onOpen() {
    this.store.dispatch(new SelectSection(this.section));
  }

}
