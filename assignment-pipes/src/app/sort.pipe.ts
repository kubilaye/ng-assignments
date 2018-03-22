import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: string[], propName?: any): any {
    if (propName === undefined) {
      return value.slice().sort();
    } else {
      return value.slice().sort(
        (a, b) => {
          if (a[propName] > b[propName]) {
            return 1;
          } else {
            return -1;
          }
        }
      );
    }
  }

}
