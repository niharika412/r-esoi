import { Component, HostListener, OnInit, Output,EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  @Output()
  plansEmitter:any=new EventEmitter();

  imagePath = '../../assets/logo.png';
  width: any;
  ngOnInit(): void {
    this.width = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
  isMenuCollapsed=true;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;


  plans(){
    this.plansEmitter.emit(true);
  }
}