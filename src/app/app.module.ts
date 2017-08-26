import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes }   from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent,
  QuestionsComponent, QuestionAddUpdateComponent } from './components';
import { CategoryService, TagService, QuestionService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TagsComponent,
    QuestionsComponent,
    QuestionAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Router
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    //Material
    MaterialModule,
    //Flex
    FlexLayoutModule
  ],
  providers: [
    CategoryService, TagService, QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
