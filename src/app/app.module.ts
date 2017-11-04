import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { MyDatePipe } from './pipes/my.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InventoryRouterModule } from './modules/inventory-router.module';
import { ContactComponent } from './components/contact/contact.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MinValidator } from './validators/min-validator.directive';
import { MaxValidator } from './validators/max-validator.directive';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { CategoryService } from './services/category.service';
import { ProductResolver } from './resolver/product.resolver';
import { CategoryResolver } from './resolver/category.resolver';
import { UnsavedComponentGuard } from './guards/unsaved.guard';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DataInterceptors } from './interceptors/data-interceptors';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTableComponent,
    MyDatePipe,
    HighlightDirective,
    PageNotFoundComponent,
    ContactComponent,
    AddProductComponent,
    ProductListComponent,
    MinValidator,
    MaxValidator,
    EditProductComponent,
    SearchComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InventoryRouterModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ProductService, CategoryService, ProductResolver,CategoryResolver,UnsavedComponentGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: DataInterceptors,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
