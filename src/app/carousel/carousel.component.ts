import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: any = ['/assets/im2.jpg', '/assets/im3.jpg', '/assets/im7.jpg', 'assets/im8.jpg',
    'assets/im5.jpg', 'assets/im10.jpg', 'assets/im11.jpg'];

  constructor() { }

  ngOnInit() { }
  }