import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reesoi';
  images=['../../assets/wine.jpg','../../assets/friends.jpg','../../assets/comp.jpg'];

  plans:any;
  plansClicked(value:boolean){
    this.plans=value;
  }
}
