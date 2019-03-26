import {Component, OnInit} from '@angular/core';
import {BASIC_ICONS} from './common/mock/basic_icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  public icons = BASIC_ICONS;
  public text = '';

  public uniqSizes: number[] = [];
  item: any;

  ngOnInit() {
    this.getUniqSizes(this.icons);
  }

  getUniqSizes(icons: any): number[] {

    for (const item in icons) {
      if (icons.hasOwnProperty(item)) {
        const width = icons[item].split('width="')[1];
        if (width) {
          this.uniqSizes.push(parseInt(width.split(' ')[0], 10));
        } else {
          this.uniqSizes.push(0);
        }
      }
    }
    return this.uniqSizes = Array.from(new Set(this.uniqSizes)).sort((a, b) => a - b);
  }

}
