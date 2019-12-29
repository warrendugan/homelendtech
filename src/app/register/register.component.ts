import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public isLinear = true;
  public user: FormGroup;
  public verification: FormGroup;
  public email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  public phone: FormControl = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.user = this.fb.group({
      email: this.email,
      phone: this.phone
    });

    this.verification = this.fb.group({
      code: ['', [Validators.required]]
    });
  }

  public requireOnly(field: string) {
    // this.user.addControl('email', this.email);
    // this.user.addControl('phone', this.phone);
    // console.log(this.user.controls);
    // Object.entries(this.user.controls).forEach(([key, value]) => {
    //   if (key !== field) {
    //     this.user.removeControl(key);
    //   }
    // });
  }
}
