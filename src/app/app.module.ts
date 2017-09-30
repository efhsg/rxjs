import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { GithubComponent } from './github/github.component';
import { UlComponent } from './ul/ul.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    GithubComponent,
    UlComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
