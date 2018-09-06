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
    $(document).ready(function () {
      $('.card.deux').on('mouseover', function () {
        $(this).animate({
          opacity: '0.5',
        });
      });
      $('.card.deux').on('mouseleave', function () {
        $(this).animate({
          opacity: '1',
        });
      });

    });
    $(document).ready(function () {
      $('.card.trois').on('mouseover', function () {
        $(this).animate({
          opacity: '0.5',
        });
      });
      $('.card.trois').on('mouseleave', function () {
        $(this).animate({
          opacity: '1',
        });
      });

    });
    $(document).ready(function () {
      $('.card.one').on('mouseover', function () {
        $(this).animate({
          opacity: '0.5',
        });
      });
      $('.card.one').on('mouseleave', function () {
        $(this).animate({
          opacity: '1',
        });
      });

    });
  }

}
