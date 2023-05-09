import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/couter.module';

import { AppComponent } from './app.component';
import { heroModule } from './heroes/hero.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    heroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
