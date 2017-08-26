import { Category, Question } from '../model';

import { categories, categoryDictionary, questions, tags, questionSaveStatus } from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface AppStore {
  categories: Category[];
  categoryDictionary: {[key: number]: Category};
  questions: Question[];
  tags: string[];
  questionSaveStatus: string;
}

export default compose(combineReducers)({
    categories: categories,
    categoryDictionary: categoryDictionary,
    questions: questions,
    tags: tags,
    questionSaveStatus: questionSaveStatus
});
