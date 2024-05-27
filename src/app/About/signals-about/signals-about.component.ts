import { Component } from '@angular/core';

@Component({
  selector: 'app-signals-about',
  standalone: true,
  imports: [],
  template: `
    <h2>About Signals</h2>
    <p>
      Signals are one of the most powerful ways to manage component state in all
      of Angular. You can synchronously derive state from other state in an
      efficient way that is much easier to read than RXJS. Though they do not
      replace RXJS. In fact, they can be best friends.
    </p>
    <p>
      Signals landed in v16 in developer preview and as stable in v17. New
      signal APIs have followed with different status.
    </p>
  `,
})
export class SignalsAboutComponent {}
