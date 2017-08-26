import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStore } from '../../store/app-store';
import { CategoryActions, QuestionActions, TagActions } from '../../store/actions';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Trivia';
  sub: any;

  constructor(private categoryActions: CategoryActions,
              private questionActions: QuestionActions,
              private tagActions: TagActions,
              private store: Store<AppStore>,
              private router: Router,
              public snackBar: MdSnackBar) {
    this.sub = store.select((s) => s.questionSaveStatus).subscribe((status) => {
      if(status === 'SUCCESS'){
        this.snackBar.open("Question Saved!", "", {duration: 2000});
      }
      if(status === 'IN PROGRESS'){
        this.router.navigate(['/questions']);
      }
    })
  }

  ngOnInit() {
    this.store.dispatch(this.categoryActions.loadCategories());
    this.store.dispatch(this.questionActions.loadQuestions());
    this.store.dispatch(this.tagActions.loadTags());
  }

  ngOnDestroy() {
    if(this.sub)
      this.sub.unsubscribe();
  }
}
