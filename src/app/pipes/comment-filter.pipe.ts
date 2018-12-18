import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(value: any, searchValue?: any): any {
    if (!searchValue) {
      return value;
    }
    return value.filter(comment => {
      return comment.includes(searchValue) ? comment : comment.toLowerCase().includes(searchValue) ? comment : null;
    });
  }

}
