import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output()
  public search = new EventEmitter();

  public text: string;
  constructor() { }

  public searchBy({ target }: KeyboardEvent): void {
    this.search.emit((target as HTMLInputElement).value);
  }
}
