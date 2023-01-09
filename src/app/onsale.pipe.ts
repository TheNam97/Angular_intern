import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onsale'
})
export class OnsalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string { // chỉnh kiểu trả về
    if(value){
      return 'aaaaaaaaa'
    }
    return '';
  }

}
