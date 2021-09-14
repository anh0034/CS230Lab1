import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SecondBarComponent } from '../Body/second-bar.component';
import { FirstBarComponent } from '../Body/first-bar.component';
import { TopBarComponent } from '../headers/top-bar.component';
import { TopBarComponent2 } from '../headers/top-bar2.component';
import { LayoutMain } from '../Layout/layout-main.component';
import { LayoutTopBody } from '../Layout/layout-top-body.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TopBarComponent, FirstBarComponent, SecondBarComponent, TopBarComponent2, LayoutMain, LayoutTopBody],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
