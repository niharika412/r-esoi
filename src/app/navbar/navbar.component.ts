import { Component, HostListener, OnInit, Output,EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  imagePath = '../../assets/logo.png';
  width: any;
  ngOnInit(): void {
    this.width = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
  isOpen = false;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  triggerOrigin:any;

  trigger:any;

  toggle(trigger: any) {
    this.triggerOrigin = trigger;
    this.isOpen = !this.isOpen
  }
  
}
