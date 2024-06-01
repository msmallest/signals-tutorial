import {Component, computed, signal} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-misc-examples',
  standalone: true,
  imports: [JsonPipe, MatButtonModule],
  template: `
    <div id="double-example">
      <button mat-flat-button color="primary" (click)="value.set(value() + 1)">$value.set($value() + 1)</button>
      <button mat-flat-button color="primary" (click)="updateValue()">$value.update(v => v + 1)</button>
      <div>
        <pre>$value = signal(0); // {{ value() }}</pre>
        <pre>$doubleValue = computed(() => this.$value() * 2); // {{ $doubleValue() }}</pre>
      </div>
    </div>
  `,
  styles: `
    button {
      --mdc-filled-button-container-shape: 4px
    }

    #double-example {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }
  `
})
export class MiscExamplesComponent {
  value = signal(0);

  $doubleValue = computed(() => this.value() * 2)

  updateValue() {
    this.value.update(v => v + 1)
  }
}
