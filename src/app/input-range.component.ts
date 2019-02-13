import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const INPUTRANGE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputRangeComponent),
  multi: true,
};

@Component({
  selector: 'app-inputrange',
  templateUrl: './input-range.component.html',
  styleUrls: [],
  providers: [INPUTRANGE_VALUE_ACCESSOR]
})
export class InputRangeComponent implements ControlValueAccessor {
  show: boolean = false;
  onChange = (_: any) => { };
  onTouched = () => { };
  value: string = '';
  constructor() { }

  writeValue(value: any): void {
    this.value = value || '';
  }

  pushChanges(value: any) {
    this.onChange(value);
  }

  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
  }
}