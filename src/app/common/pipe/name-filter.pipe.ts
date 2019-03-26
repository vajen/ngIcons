import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  public transform(icons: any, searchText: string): any {
    if (!searchText) {
      return icons;
    }

    return icons.filter((icon: any) => {
      return icon.key.toLowerCase()
        .includes(searchText.toLowerCase());
    });
  }
}
