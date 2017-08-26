import { Category, Question } from '../model';

import { categories, questions } from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface AppStore {
  categories: Category[];
  questions: Question[];
}

export default compose(combineReducers)({
    categories: categories,
    questions: questions
});
