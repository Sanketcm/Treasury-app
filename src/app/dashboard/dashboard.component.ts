import { Component } from '@angular/core';  
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';

@Component({
  selector: 'app-dashboard',
  imports: [ MatCardModule, HeaderComponent,NavbarComponent,OverviewComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalUsers: number = 0;
  activeSessions: number = 0;


  ngOnInit(): void {
  }

  toggleSidebar(){
    console.log(":inside nav bar ")
  }
}
