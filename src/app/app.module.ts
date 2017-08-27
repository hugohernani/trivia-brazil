import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from  './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { RoutingModule } from './routing/routing.module';

import { AppComponent, DashboardComponent,
         QuestionAddUpdateComponent, MyQuestionsComponent } from './components';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent,
    QuestionAddUpdateComponent, MyQuestionsComponent
  ],
  imports: [
    BrowserModule,

    // Router
    //custom modules
    CoreModule,
    SharedModule,
    AdminModule,
    RoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
