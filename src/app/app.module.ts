import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from  './shared/shared.module';
import { RoutingModule } from './routing/routing.module';

import { AppComponent, DashboardComponent,
         AdminComponent,
         CategoriesComponent, TagsComponent,
         QuestionAddUpdateComponent, MyQuestionsComponent, AdminQuestionsComponent } from './components';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent,
    AdminComponent,
    CategoriesComponent, TagsComponent,
    QuestionAddUpdateComponent, MyQuestionsComponent, AdminQuestionsComponent
  ],
  imports: [
    BrowserModule,

    // Router
    //custom modules
    CoreModule,
    SharedModule,
    RoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
