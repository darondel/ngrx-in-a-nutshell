import { Component } from '@angular/core';

import { ReduxSection } from '../store/models/redux.model';

@Component({
  selector: 'app-redux-showcase',
  templateUrl: './redux-showcase.component.html',
  styleUrls: ['./redux-showcase.component.css']
})
export class ReduxShowcaseComponent {

  ReduxSection = ReduxSection;

}
