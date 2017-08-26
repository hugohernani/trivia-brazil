import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { CategoryActions, QuestionActions, TagActions } from '../../store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Trivia';

  constructor(private categoryActions: CategoryActions,
              private questionActions: QuestionActions,
              private tagActions: TagActions,
              private store: Store<AppStore>) {}

  ngOnInit() {
    this.store.dispatch(this.categoryActions.loadCategories());
    this.store.dispatch(this.questionActions.loadQuestions());
    this.store.dispatch(this.tagActions.loadTags());
  }
}
