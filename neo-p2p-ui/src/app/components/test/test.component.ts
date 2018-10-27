import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  minDate = new Date();
  sliderVal = 1;
  monthVal = 6;
  
  constructor() {
 
   }

   onInputChange(event: any) {
    this.sliderVal = event.value;
  }


  ngOnInit() {

    
  }

}
