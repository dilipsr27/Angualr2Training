import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { MyDatePipe } from './pipes/my.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InventoryRouterModule } from './modules/inventory-router.module';
import { ContactComponent } from './components/contact/contact.component';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTableComponent,
    MyDatePipe,
    HighlightDirective,
    PageNotFoundComponent,
    ContactComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InventoryRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
