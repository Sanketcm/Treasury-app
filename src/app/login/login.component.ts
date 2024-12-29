import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog'; // Only for Material Dialog
import { TermsAndConditionsDialogComponent } from './terms-and-conditions-dialog/terms-and-conditions-dialog.component';


@Component({
  selector: 'app-login',
  imports: [CommonModule , FormsModule,  ReactiveFormsModule ,TermsAndConditionsDialogComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  fb = inject(FormBuilder);
  loginObj : any = {
    username: "",
    password:""
  }
  errorMessage: any = null;
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
    ){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  http =inject(HttpClient)

  openTermsAndConditions(): void {
    this.dialog.open(TermsAndConditionsDialogComponent, {
      width: '500px', // Adjust the width as needed
      disableClose: true // Prevent closing without user action
    });
  }

  onFormSubmit(form: FormGroup, formGroupDirective: FormGroupDirective) {
    this.isLoading = true; 
    console.log("before")
    // this.router.navigateByUrl('/dashboard');
    this.authService.login(form.get('username')?.value, form.get('password')?.value).subscribe(response => {
      console.log("after")
      if (response) {
        console.log("before redirect")
        this.router.navigateByUrl('/dashboard');
      }
    }
    ,error=>{
      this.isLoading = false;
      this.errorMessage = error;
      console.log(this.errorMessage)
      formGroupDirective.resetForm();
      form.reset();
    }
  )
  }
}
  // onFormSubmit(form: FormGroup, formGroupDirective: FormGroupDirective) {
  //   debugger
  //   this.isLoading = true;
  //   this.authService.login(form.get('username')?.value, form.get('password')?.value, (error: any) => {

  //     if (!error) {
  //       console.log("inside err not ")
  //       this.router.navigateByUrl('/dashboard');
  //     }
  //     this.isLoading = false;
  //     this.errorMessage = error;
  //     formGroupDirective.resetForm();
  //     form.reset();
  //   });
  // }

