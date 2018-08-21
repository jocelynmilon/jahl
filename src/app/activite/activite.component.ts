import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {
image: any = ['/assets/trocadero.jpg', '/assets/disney.jpg', '/assets/opera.jpg',
 '/assets/walk.jpg', '/assets/hollywood.jpg', '/assets/cimetieremae.jpg', '/assets/distillerie.jpg',
  '/assets/memorial.jpg', '/assets/stbart.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
