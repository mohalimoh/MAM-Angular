import { Component, OnInit, Input , OnChanges, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {IPerson} from 'src/models/person';
import { from } from 'rxjs';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarComponent implements OnInit , OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() starClicked = new EventEmitter<IPerson>();
  person: IPerson = {
    name: 'Mohammad',
    age: 35,
    school: 'shad'
    };
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
          this.starWidth = this.rating * 70 / 5;
  }

onStarClicked() {
  this.person.age = this.rating;
  this.starClicked.emit(this.person);
}


}
