import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  download(){
    window.open("https://drive.google.com/file/d/1Ws2wNTsSJHfiPrm7aRQKs6me8yaul4AS/view?usp=sharing", '_blank');
  }
}
