import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  minDate = new Date();
  percentVal = 1;
  monthVal = 6;

  constructor() {}

   onPercentChange(event: any) {
    this.percentVal = event.value;
  }

  onMonthChange(event: any) {
    this.monthVal = event.value;
  }


  ngOnInit() {}

}
