import { Component, HostListener, OnInit, Output,EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatDialog} from '@angular/material/dialog';
import {QuicksignComponent} from '../quicksign/quicksign.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(QuicksignComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
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
