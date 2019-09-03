import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { Lap02Component } from './lap02/lap02.component';
import { Lap03Component } from './lap03/lap03.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'lap02', component: Lap02Component },
  { path: 'products', component: ProductsComponent },
  { path: 'lap03', component: Lap03Component },

  // { path: '**', component: PageNotFoundComponent }
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
];

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
    RatingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
