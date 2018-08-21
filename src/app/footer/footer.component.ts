import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
image: any = ['/assets/sociaux/facebook.png', '/assets/sociaux/instagram.png', '/assets/sociaux/TWITTER.png',
 '/assets/sociaux/whatapp.png', '/assets/sociaux/youtube.png'];
  constructor() { }

  ngOnInit() {
  }

}
