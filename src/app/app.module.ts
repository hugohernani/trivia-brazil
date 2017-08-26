import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularFireModule } from 'angularfire2';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routes }   from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent,
  QuestionsComponent, QuestionAddUpdateComponent, LoginComponent } from './components';
import { CategoryService, TagService, QuestionService, AuthenticationService } from './services';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {CategoryActions, QuestionActions, TagActions, UserActions} from './store/actions';
import {CategoryEffects, QuestionEffects, TagEffects} from './store/effects';
import { default as reducer } from './store/app-store';

export const firebaseConfig = {
  apiKey: 'AIzaSyCe_ZGkZaPpuBbodB6_39ovZwaXOOVhUHo',
  authDomain: 'rwa-trivia-brazil.firebaseapp.com',
  databaseURL: 'https://rwa-trivia-brazil.firebaseio.com',
  projectId: 'rwa-trivia-brazil',
  storageBucket: 'rwa-trivia-brazil.appspot.com',
  messagingSenderId: '762046923934'
}

@NgModule({
  declarations: [
    AppComponent, LoginComponent,
    CategoriesComponent,
    TagsComponent,
    QuestionsComponent,
    QuestionAddUpdateComponent
  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Router
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),

    //Material
    MaterialModule,
    //Flex
    FlexLayoutModule,

    AngularFireModule.initializeApp(firebaseConfig),

    //store
    StoreModule.provideStore(reducer),

    //ngrx effects
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(QuestionEffects),
    EffectsModule.run(TagEffects)
  ],
  providers: [
    CategoryService, TagService, QuestionService,
    CategoryActions, QuestionActions, TagActions, UserActions,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
