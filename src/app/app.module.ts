import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {TopBarComponent} from './headers/top-bar.component';
import {FirstBarComponent} from './first-bar.component';
import { SecondBarComponent } from './second-bar.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TopBarComponent, FirstBarComponent, SecondBarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
