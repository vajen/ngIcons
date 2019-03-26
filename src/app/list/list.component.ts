import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit {

  @Input() icon: any;

  @ViewChild('svg') svg: ElementRef;


  constructor() { }

  ngOnInit(): void {
    this.svg.nativeElement.innerHTML = " " + this.icon.value + " <span>" + this.icon.key + "</span>";
  }
}
