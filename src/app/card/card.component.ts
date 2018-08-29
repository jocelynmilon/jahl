import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


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
    $(document).ready(function () {
      $('.card.pres').on('mouseover', function () {
        $(this).animate({
          opacity: '0.5',

          height: '34rem',
          width: '60rem'

        });
      });
      $('.card.pres').on('mouseleave', function () {
        $(this).animate({
          opacity: '1',

          height: '30rem',
          width: '50rem'
        });
      });

    });
  }
}
