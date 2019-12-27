import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  private columns: number;
  private firstName = new FormControl('', [Validators.required]);
  private lastName = new FormControl('', [Validators.required]);
  private email = new FormControl('', [Validators.required, Validators.email]);
  private phone = new FormControl('', [Validators.required, Validators.maxLength(14)]);
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((result) => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.columns = 1;
      } else {
        this.columns = 2;
      }
    });
  }
}
