import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  image: any = '/assets/gwada.jpg';
  image2: any = '/assets/martinique.jpg';
  image3: any = '/assets/losangeles.jpg';
  image4: any = '/assets/newyork.jpg';
  constructor() { }

  ngOnInit() {
  }

}
