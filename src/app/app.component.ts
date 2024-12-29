import { CommonModule } from '@angular/common';
import { Component, input, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { topNavConfig } from './models/account.model';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [
    // CommonModule,
    // MatIconModule,
    // MatSidenavModule,  // For side navigation
    // MatToolbarModule,
    // MatListModule,     // For list items in sidenav
    // LayoutModule,
    RouterModule  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'treasury-app';
  // topNavConfig : topNavConfig = any;
  // @ViewChild('sidenav') sidenav!: MatSidenav; // Reference to the sidenav

  // isHandset$: Observable<boolean>;
  // constructor(private breakpointObserver: BreakpointObserver) {
    
  //   this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)  // Return true if the screen matches 'Handset' breakpoint
  //   );
  // }

  // ngAfterViewInit() {
  //   // You can safely use the sidenav here if necessary
  //   console.log(this.sidenav);
  // }

  // toggleSidenav() {
  //   this.sidenav.toggle();
  // }
  
}
