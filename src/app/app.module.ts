import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { Lap02Component } from './lap02/lap02.component';
import { Lap03Component } from './lap03/lap03.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    Lap02Component,
    Lap03Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
