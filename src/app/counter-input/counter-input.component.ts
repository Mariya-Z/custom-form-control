import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useFactory: forwardRef(() => CounterInputComponent),
      multi: true,
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor {
  debugger;
  @Input() _counterValue = 0;

  public get counterValue(): number {
      return this._counterValue;
  }

  public set counterValue(val) {
    debugger;
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }
  public propagateChange = (_: any) => {};

  public increment(): void {
    this.counterValue++;
    // this.propagateChange(this.counterValue);
  }

  public decriment(): void {
    this.counterValue--;
    // this.propagateChange(this.counterValue);
  }

  public writeValue(value: any): void {
    if (value !== undefined) {
      this._counterValue = value;
    }
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: any): void {
  }

}
