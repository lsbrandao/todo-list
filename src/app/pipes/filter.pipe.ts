import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../models/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], searchValue?: any): any {
    if (!searchValue) {
      return value;
    }
    return value.filter(item => {
      return item.title.includes(searchValue) ? item : (item.title).toLowerCase().includes(searchValue) ? item : null;
    });
  }
}
