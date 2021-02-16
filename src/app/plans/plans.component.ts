import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor() { }

  width: any;
  cols:any;
  ngOnInit(): void {
    this.width = window.innerWidth;
    console.log(this.width)
    if(this.width<640){
      this.cols="1";
    }
    else{
      this.cols="2"
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
    if(this.width<640){
      this.cols="1";
    }
    else{
      this.cols="3"
    }
  }

  meetings=['Two meetings every weekend','Equal time for french and english','Active and healthy sessions with focus on practicing the language', 'Interesting topics']


}
