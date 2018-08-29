import { Component, OnInit } from '@angular/core';

import { Location } from '../_models/location.interface';
import { PopperOptions } from 'popper.js';

declare var $: any;
$('.popover-dismiss').popover({
  trigger: 'focus'
});

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  titre: any = ['Appartement', 'Villa', 'Maison', ];
  image: any = ['/assets/appartement/appart.jpg', '/assets/appartement/appart2.jpg', '/assets/appartement/appart3.jpg',
    '/assets/appartement/appart4.jpg', '/assets/appartement/appart5.jpg', '/assets/appartement/appart6.jpg'];
  image2: any = ['/assets/maison/maison.jpg', '/assets/maison/maison2.jpg', '/assets/maison/maison3.jpg'];
  image3: any = ['/assets/villa/villa.jpg', '/assets/villa/villa2.jpg', '/assets/villa/villa3.jpg'];
  iconne: any = ['/assets/iconnes/1.png', '/assets/iconnes/2.png', '/assets/iconnes/3.png',
    '/assets/iconnes/4.png', '/assets/iconnes/5.png'];


  constructor() { }



  ngOnInit() { }


}
