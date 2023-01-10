import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from "@angular/forms";
import { OnsalePipe } from './onsale.pipe';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HightlightDirective } from './Directives/hightlight.directive'; // Dùng ngModel phải import

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnsalePipe,
    AboutComponent,
    PageNotFoundComponent,
    HightlightDirective,
    
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
