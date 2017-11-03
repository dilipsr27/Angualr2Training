import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ProductService } from "../services/product.service";
import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";

@Injectable()
export class CategoryResolver implements Resolve<Category[]>
{
    constructor(private categorySvc:CategoryService)
    {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Category[] | Observable<Category[]> | Promise<Category[]> {
        return this.categorySvc.getCategories();
    }
   
    
}