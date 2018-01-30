import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(albums: any, term: any): any {
    if (term === undefined) return albums;
    return albums.filter(function (cover) {
        return cover.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}
