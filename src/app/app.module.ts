import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';

import { CoreModule } from './core/core.module';
import { SharedModule } from  './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { QuestionsModule } from  './questions/questions.module';
import { RoutingModule } from './routing/routing.module';

import { AppComponent, DashboardComponent } from './components';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,

    // Router
    //custom modules
    CoreModule,
    SharedModule,
    AdminModule,
    QuestionsModule,
    RoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
