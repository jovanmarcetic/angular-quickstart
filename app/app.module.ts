import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from './app.component';
import { NgbdButtonsRadio } from './ngbd-buttons-radio.component'

@NgModule({
  imports:      [ NgbModule, BrowserModule ],
  declarations: [ AppComponent, NgbdButtonsRadio ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
