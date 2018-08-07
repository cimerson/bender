import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupComponent } from './bender/bender-group.component';
import { BenderComponent } from './bender/bender.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    BenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
