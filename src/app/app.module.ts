import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
	
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './core/navbar/navbar.component'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductsInMemoryService } from './services/products-in-memory.service';
import { CartInMemoryService } from './services/cart-in-memory.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductDetailsComponent,
    CartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(ProductsInMemoryService,{dataEncapsulation:false,passThruUnknownUrl: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
