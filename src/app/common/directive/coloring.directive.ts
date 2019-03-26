import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColoring]',
  exportAs: 'coloring'
})
export class ColoringDirective {


  constructor() { }

  @HostBinding('class') myClass: string;

  @HostListener('click', ['$event']) public changeColor(event) {
    this.setColor(event);
  }

  setColor(value: string): void {
    this.myClass = value;
  }

}
