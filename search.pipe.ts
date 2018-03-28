import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(people, value) {
    return people.filter(p => {
      return p.name.includes(value)
    })
  }
}
