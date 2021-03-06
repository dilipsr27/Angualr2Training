import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';
import {minimum} from './validators'

@Directive({
  selector: '[ngModel][minimum]',
  providers:[{provide: NG_VALIDATORS, useExisting: MinValidator, multi:true}]
})
export class MinValidator implements Validator {
  @Input("minimum") public value:number;
  validate(c:AbstractControl): {[key: string]: any} {
      /*if(Validators.required(c)){
        return null;
      }
      if(c.value && c.value<this.value){
        return {'minimum':{value:this.value, actual:c.value}}
      }
      return null*/
      return minimum(this.value)(c)
  }
  constructor() { }

}
