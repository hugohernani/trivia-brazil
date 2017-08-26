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

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {CategoryActions, QuestionActions, TagActions} from './store/actions';
import {CategoryEffects, QuestionEffects, TagEffects} from './store/effects';
import { default as reducer } from './store/app-store';

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
    FlexLayoutModule,

    //store
    StoreModule.provideStore(reducer),

    //ngrx effects
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(QuestionEffects),
    EffectsModule.run(TagEffects)
  ],
  providers: [
    CategoryService, TagService, QuestionService,
    CategoryActions, QuestionActions, TagActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
