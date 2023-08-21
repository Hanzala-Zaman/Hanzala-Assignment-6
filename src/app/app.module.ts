import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { ProductsdataService } from './productsdata.service';
import { ProductsComponent } from './products/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, 
    ProductsComponent
    

  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [ProductsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }




