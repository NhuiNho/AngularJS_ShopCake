import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() Rating: number
  @Input() nameRating: string = ''
  @Output() outRating: EventEmitter<string> = new EventEmitter<string>()
  starWidth: number = 0
  constructor() {
    this.Rating = 0
    this.starWidth = this.Rating * 90 / 5
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.starWidth = this.Rating * 90 / 5;
  }
  viewRating() {
    this.outRating.emit(`Rating ${this.nameRating} : ${ this.Rating }`)
  }
}
