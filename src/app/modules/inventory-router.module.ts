import {RouterModule, Route} from '@angular/router';
import { NgModule} from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { EditProductComponent } from '../components/edit-product/edit-product.component';
import { ProductResolver } from '../resolver/product.resolver';
import { CategoryResolver } from '../resolver/category.resolver';
import { UnsavedComponentGuard } from '../guards/unsaved.guard';
import { SearchComponent } from '../components/search/search.component';
import { LoginComponent } from '../components/login/login.component';

var routes:Route[]=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'new',component:AddProductComponent,resolve:{categories:CategoryResolver}},
  {path:'list',component:ProductListComponent},
  {path:'edit/:id',component:EditProductComponent, resolve:{product:ProductResolver, categories:CategoryResolver},
  canDeactivate:[UnsavedComponentGuard]},
  {path:'search',component:SearchComponent},
  {path:'categories',loadChildren:'app/category-module/category.module#CategoryModule'},
 {path:'**',component:PageNotFoundComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class InventoryRouterModule { }
