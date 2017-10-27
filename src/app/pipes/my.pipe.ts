import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any): Date {
    if(value){
      return value
    }else{
      return new Date();
    }
  }

}
