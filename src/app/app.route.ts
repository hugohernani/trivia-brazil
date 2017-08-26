import { Routes, RouterModule }  from '@angular/router';
import { CategoriesComponent, TagsComponent, QuestionsComponent,
  QuestionAddUpdateComponent } from './components/index';
import { AuthGuard } from './services';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'tags',
    component: TagsComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'question/add',
    component: QuestionAddUpdateComponent,
    canActivate: [AuthGuard]
  }
];
