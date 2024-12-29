import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { routes } from '../../app.routes';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [ MatCardModule, CommonModule ,  MatSidenavModule ,MatListModule,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

 constructor(private router: Router){}
 InvestmentMenu= [
    {
      label: 'New Investment',
      icon: 'dashboard',
      expanded: false,
      children: [
        { label: 'Mutual Fund', route: ' ' },
        { label: 'Fixed Deposit', route: ' ' },
      ],
    },
    {
      label: 'Redemption',
      icon: 'settings',
      
      children: [
        { label: 'Profile', route: ' ' },
        { label: 'Preferences', route: ' ' },
      ],
    },
    {
      label: 'Borrowing',
      icon: 'help',
      expanded: false,
      children: [
        { label: 'FAQ', route: '' },
        { label: 'Support', route: '' },
      ],
    },
    {
      label: 'Recent Transaction',
      icon: 'help',
      expanded: false,
      children: [
        { label: 'FAQ', route: '' },
        { label: 'Support', route: '' },
      ],
    },{
      label: 'Mark/Unmark Lien',
      icon: 'help',
      expanded: false,
      children: [
        { label: 'FAQ', route: '' },
        { label: 'Support', route: '' },
      ],
    },
 ];

 toggleDropdown(item: any): void {
  this.InvestmentMenu.forEach(menuItem => {
    if (menuItem !== item) {
      menuItem.expanded = false;
    }
  });
  if (item.children) {
    item.expanded = !item.expanded;
  }
}
}
