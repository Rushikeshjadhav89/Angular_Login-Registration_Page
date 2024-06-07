import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rf-forms',
  templateUrl: './rf-forms.component.html',
  styleUrls: ['./rf-forms.component.css']
})
export class RfFormsComponent implements OnInit {
  user_login: any;
  user_Reg: any;
  uShowPage: boolean = true;

  // Define properties used in the template
  uName: any;
  uLastName: any;
  uMail: any;
  uPass: any;
  u_Mail: any;
  u_Pass: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user_Reg = this.formBuilder.group({
      uName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      uLastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      uMail: ['', [Validators.required, Validators.email]],
      uPass: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.user_login = this.formBuilder.group({
      u_Mail: ['', [Validators.required, Validators.email]],
      u_Pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  openLogin() {
    this.uShowPage = false;
  }

  openSignup() {
    this.uShowPage = true;
  }

  uData(val: any) {
    if (this.user_Reg.valid) {
      if (this.authService.register(val)) {
        this.router.navigate(['/home']);
      }
    }
  }

  uSubmit(val: any) {
    if (this.user_login.valid) {
      if (this.authService.login(val.u_Mail, val.u_Pass)) {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
