import { NgModule } from '@angular/core';

import { SharedModule } from  '../shared/shared.module';
import { QuestionsRoutingModule } from  './routing/questions-routing.module';

import { QuestionAddUpdateComponent, MyQuestionsComponent } from './components';

@NgModule({
  declarations: [
    QuestionAddUpdateComponent, MyQuestionsComponent
  ],
  imports: [
    //rwa modules
    SharedModule,
    QuestionsRoutingModule
  ],
  providers: [
  ]
})
export class QuestionsModule { }
