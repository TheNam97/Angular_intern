import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from "@angular/forms";
import { OnsalePipe } from './onsale.pipe'; // Dùng ngModel phải import

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnsalePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // dùng ngModul phải import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
