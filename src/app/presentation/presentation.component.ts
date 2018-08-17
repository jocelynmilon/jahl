import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
image5: any =  '/assets/presentation.jpg';
image6: any =  '/assets/ici.png';
image7: any =  '/assets/monaie.jpg';

  constructor() { }

  ngOnInit() {
  }

}
