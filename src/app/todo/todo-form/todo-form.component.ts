import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AddOne } from '../store/actions/todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      content: ''
    });
  }

  onSubmit() {
    const content = this.form.value.content;

    if (content) {
      this.store.dispatch(new AddOne(content));
      this.form.reset();
    }
  }

}
