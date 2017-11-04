import {HttpEvent, HttpRequest, HttpInterceptor, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";



@Injectable()
export class DataInterceptors implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const secureReq = req.clone({url:req.url.replace('http://','https://'),
    headers:req.headers.set("Test-header",'customValue')});
        console.log("Processed:" + secureReq.url)
        return next.handle(secureReq);
    }
}