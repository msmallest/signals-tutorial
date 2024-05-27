import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsAboutComponent } from './About/signals-about/signals-about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalsAboutComponent],
  template: `
    <h1>Signals Tutorial</h1>
    <app-signals-about />
  `,
})
export class AppComponent {}
