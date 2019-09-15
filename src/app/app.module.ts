import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { Lap02Component } from './lap02/lap02.component';
import { Lap03Component } from './lap03/lap03.component';
import { ProductsComponent } from './products/products.component';
import { DetailcourseComponent } from './detailcourse/detailcourse.component';
import { CartserviceComponent } from './cartservice/cartservice.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination'
// const appRoutes: Routes = [
//   // { path: 'lap02', component: Lap02Component },
//   // { path: 'products', component: ProductsComponent },
//   // { path: 'lap03', component: Lap03Component },


//   // { path: '**', component: PageNotFoundComponent }
//   {
//     path: '',
//     redirectTo: 'products',
//     pathMatch: 'full'
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    Lap02Component,
    Lap03Component,
    CourseComponent,
    DetailcourseComponent,
    CartserviceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    RatingModule,
    CommonModule,
    NgxPaginationModule,
    // RouterModule.forRoot(

    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
    RouterModule.forRoot([

      { path: '', component: ProductsComponent },

      // { path: 'products/:productId', component: ProductsComponent },
      { path: 'lap02', component: Lap02Component },
      { path: 'lap03', component: Lap03Component },

      { path: 'products', component: ProductsComponent },
      { path: 'products/:productId', component: DetailproductComponent },

      { path: 'course', component: CourseComponent },
      { path: 'course/:id', component: DetailcourseComponent, pathMatch: 'full' },

      { path: 'cart', component: CartserviceComponent },

      // { path: '**', redirectTo: 'course', pathMatch: 'full' },


    ], { enableTracing: true }),
    HttpClientModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  exports: [],

})
export class AppModule { }