import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isLinear = true;
  public user: FormGroup;
  public verification: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.user = this.fb.group({
      phone: ['', [Validators.required]]
    });

    this.verification = this.fb.group({
      code: ['', [Validators.required]]
    });
  }

  public sendVerificationToken(stepper) {
    this.http
      .post('/verify/send', { phone: this.user.controls.phone.value })
      .subscribe((response) => {
        stepper.next();
      });
  }

  public verifyToken(stepper) {
    this.http
      .post('/verify/check', {
        phone: this.user.controls.phone.value,
        code: this.verification.controls.code.value
      })
      .subscribe((response) => {
        stepper.next();
      });
  }
}
