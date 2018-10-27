import { Component, OnInit } from '@angular/core';
import { NeoService } from '../services/neo.service';

@Component({
  selector: 'app-neon-service-test',
  templateUrl: './neon-service-test.component.html',
  styleUrls: ['./neon-service-test.component.scss']
})
export class NeonServiceTestComponent implements OnInit {

  public response: any = {}

  constructor(private neoService: NeoService) { }



  ngOnInit() {
  }

  invokeNeo() {
    this.neoService.executeSmartContract().then(res => {
      this.response = res;
    });

  }

}
