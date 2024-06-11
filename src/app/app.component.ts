import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsAboutComponent } from './01 - About/signals-about.component';
import { SignalApisComponent } from './01 - About/signal-apis.component';
import {MiscExamplesComponent} from "./misc-examples/misc-examples.component";
import {FormEventsExampleComponent} from "./form-events-example/form-events-example.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalsAboutComponent, SignalApisComponent, MiscExamplesComponent, FormEventsExampleComponent],
  template: `
    <h1>Signals Tutorial</h1>
    <app-misc-examples />
    <app-form-events-example />
<!--    <app-signals-about />-->
<!--    <app-signal-apis />-->
  `,
})
export class AppComponent {}
