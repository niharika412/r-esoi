import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  images=['../../assets/wine.jpg','../../assets/friends.jpg','../../assets/comp.jpg'];

  width: any;
  small:any;
  ngOnInit(): void {
    this.width = window.innerWidth;
    // console.log(this.width)
    
    if(this.width<640){
      this.small=true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
    if(this.width<640){
      this.small=true;
    }
  }
}
