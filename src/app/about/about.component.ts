import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

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

  abouts=['Improving Language Skills','No advertisements','Easy access from all over the world','Connect with people all over the world','Pay what you can','Completely flexible'];

}
