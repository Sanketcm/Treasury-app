import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-and-conditions-dialog',
  imports: [CommonModule],
  templateUrl: './terms-and-conditions-dialog.component.html',
  styleUrl: './terms-and-conditions-dialog.component.css'
})
export class TermsAndConditionsDialogComponent {
  isPopupVisible = false;
  openPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }
}
