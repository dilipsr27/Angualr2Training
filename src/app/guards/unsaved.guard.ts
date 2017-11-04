import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";


export interface UnsavedComponentBase{

}

@Injectable()
export class UnsavedComponentGuard implements CanDeactivate<UnsavedComponentBase>{
    canDeactivate(component: UnsavedComponentBase, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        let canLeave:boolean=true;

        if(nextState.url){
            canLeave = window.confirm("Do you want to leave the page?")
        }
        return canLeave;
    }
    
}