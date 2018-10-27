import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private descriptions = [
    `I want a new bike. Please fund me.`,
    'Gimme money for a new porsche.'
  ]
  public users = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let userImagesUrl = 'https://randomuser.me/api/?results=25';
    this.http.get(userImagesUrl)
      .subscribe((res) => {
        let results = ((res as any).results as any[]);
        this.users = results.map(u => {
          let descLength = this.descriptions.length;
          let descRandom = Math.floor((Math.random() * descLength) + 1);
          let desc = this.descriptions[descRandom - 1];
          return {
            name: `${u.name.first} ${u.name.last}`,
            city: `${u.location.city}`,
            image: u.picture.large,
            description: desc
          };
        });

      });
  }

}
