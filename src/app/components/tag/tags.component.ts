import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../core/store/app-store';

@Component({
  selector: 'tag-list',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnDestroy {
  tagObs: Observable<string[]>;
  tags: string[];
  sub: any;

  constructor(private store: Store<AppStore>) {
    this.tagObs = store.select((s) => s.tags);
  }

  ngOnInit() {
    this.sub = this.tagObs.subscribe(tags => this.tags = tags);
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
