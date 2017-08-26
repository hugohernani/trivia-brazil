import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Category } from '../model';
import '../rxjs-extensions';


@Injectable()
export class CategoryService {

  constructor(private af: AngularFire) {
  }

  getCategories(): Observable<Category[]> {
    return this.af.database.list('/categories');
  }
}
