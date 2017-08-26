import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularFireModule } from 'angularfire2';

import 'hammerjs';

import { routes }   from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent,
  QuestionAddUpdateComponent, LoginComponent,
  PasswordAuthComponent, AdminComponent, AdminQuestionsComponent,
  DashboardComponent, MyQuestionsComponent } from './components';
import { CategoryService, TagService, QuestionService,
  AuthenticationService, AuthGuard } from './services';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// custom modules
import { SharedModule } from './shared/shared.module';

import {CategoryActions, QuestionActions, TagActions,
  UserActions, UIStateActions} from './store/actions';
import {CategoryEffects, QuestionEffects, TagEffects, UserEffects} from './store/effects';
import { default as reducer } from './store/app-store';

import { firebaseConfig } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, LoginComponent,
    CategoriesComponent,
    TagsComponent,
    QuestionAddUpdateComponent,
    PasswordAuthComponent,
    AdminComponent,
    AdminQuestionsComponent,
    DashboardComponent,
    MyQuestionsComponent
  ],
  entryComponents: [
    LoginComponent, PasswordAuthComponent
  ],
  imports: [
    BrowserModule,
    // Router
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),

    AngularFireModule.initializeApp(firebaseConfig),

    //store
    StoreModule.provideStore(reducer),

    //ngrx effects
    EffectsModule.run(UserEffects),
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(QuestionEffects),
    EffectsModule.run(TagEffects),

    //custom modules
    SharedModule
  ],
  providers: [
    CategoryService, TagService, QuestionService,
    CategoryActions, QuestionActions, TagActions, UserActions,
    UIStateActions, AuthenticationService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
