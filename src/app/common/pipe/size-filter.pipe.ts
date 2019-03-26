import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeFilter'
})
export class SizeFilterPipe implements PipeTransform {

  public transform(icons: any, selectedSize: number): any {
    if (selectedSize === 0) {
      return icons.filter((item: any) => {
        return !item.value.includes("width=\"");
      });
    }

    return icons.filter((item: any) => {
      return item.value.includes("width=\"" + selectedSize);
    });
  }

}
