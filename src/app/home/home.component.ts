import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IPerson } from 'src/models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Ratings: number[] = [5, 4.8, 2, 3.5, 3, 1.8, 1];
  eventOutput: IPerson;
  constructor() { }
  name: string;
@ViewChild('nameInpudField') inputVar: ElementRef;
  ngOnInit() {
  }

  onClicked(event: IPerson) {
    this.eventOutput = event;
  }
  // btnApplyOnCliked(element: HTMLInputElement) {

  //   this.name = element.value;
  // }

  btnApplyOnCliked() {

      this.name = this.inputVar.nativeElement.value;

    }
}

