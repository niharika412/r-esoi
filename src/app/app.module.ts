import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PlansComponent } from './plans/plans.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import {OverlayModule} from '@angular/cdk/overlay';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { QuicksignComponent } from './quicksign/quicksign.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlansComponent,
    DashboardComponent,
    AboutComponent,
    SignupComponent,
    QuicksignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,OverlayModule,
    MatListModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatButtonModule,NgbModule,MatSlideToggleModule, MatCardModule, MatGridListModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
