import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsAboutComponent } from './01 - About/signals-about.component';
import { SignalApisComponent } from './01 - About/signal-apis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalsAboutComponent, SignalApisComponent],
  template: `
    <h1>Signals Tutorial</h1>
     <app-signals-about />
    <app-signal-apis />
  `,
})
export class AppComponent {}
