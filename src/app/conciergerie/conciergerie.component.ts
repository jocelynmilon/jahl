import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conciergerie',
  templateUrl: './conciergerie.component.html',
  styleUrls: ['./conciergerie.component.css']
})
export class ConciergerieComponent implements OnInit {
image: any = ['/assets/laverie.jpg', '/assets/pizzaria.jpg', '/assets/bar.jpg', '/assets/resto.jpg',
 '/assets/locacar.jpg', '/assets/taxi.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
