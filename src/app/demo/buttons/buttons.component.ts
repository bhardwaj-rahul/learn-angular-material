import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <button mat-raised-button color="primary">Basic</button>
<button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
    <mat-icon>bookmark</mat-icon>
  </button>
  <mat-checkbox class="example-margin">Check me!</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
