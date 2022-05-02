import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnChanges {
  @Input() firstName: string;
  @Input() lastName: string;

  fullName: string = '';
  lifecycle: string = '';
  ngOnChanges(changes: SimpleChanges) {
    if (changes.firstName || changes.lastName) {
      this.fullName = `${this.firstName} ${this.lastName}`;
    }
  }
  ngDoCheck() {
    this.lifecycle = 'ngDoCheck' + ' ' + `${this.firstName} ${this.lastName}`;
  }
}
