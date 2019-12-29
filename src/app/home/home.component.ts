import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public items = [
    {
      image: {
        src: 'assets/two-factor-authentication.svg',
        alt: 'Illustration of computer and mobile phone.'
      },
      headline: 'Our online application is safe and secure.',
      button: {
        link: ['/register'],
        text: 'Get Started'
      }
    },
    {
      image: {
        src: 'assets/assistant.svg',
        alt: 'Illustration of assistant next to mobile phone.'
      },
      headline: 'Mel, the LO, is here to help along the way... but not in the way.',
      button: {
        link: ['/register'],
        text: 'Get Started'
      }
    }
  ];
  constructor() {}
}
