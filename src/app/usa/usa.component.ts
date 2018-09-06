import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {
image: any = '/assets/santa.jpg';
image2: any = '/assets/malibu.jpg';
image3: any = '/assets/venice.jpg';
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.card').on('mouseover', function () {
        $(this).animate({
          opacity: '0.5',
        });
      });
      $('.card').on('mouseleave', function () {
        $(this).animate({
          opacity: '1',
        });
      });

    });
  }

}
