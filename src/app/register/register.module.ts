import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    data: {
      seo: {
        title: 'Register | loanDepot',
        description:
          'Registration has never been easier. Sign up now with your mobile phone number to get your best rate ever.',
        img: '/assets/create-bear.png'
      }
    }
  }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    HttpClientModule
  ]
})
export class RegisterModule {}
