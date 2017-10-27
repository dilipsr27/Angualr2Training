import {RouterModule, Route} from '@angular/router';
import { NgModule} from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AddProductComponent } from '../components/add-product/add-product.component';
import { ProductListComponent } from '../components/product-list/product-list.component';

var routes:Route[]=[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'new',component:AddProductComponent},
  {path:'list',component:ProductListComponent},
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
