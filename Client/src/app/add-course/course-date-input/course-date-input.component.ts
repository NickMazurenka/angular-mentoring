import { Component, OnInit, Input, forwardRef, ExistingProvider } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, FormControl, ValidationErrors, NG_VALIDATORS
} from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-course-date-input',
  templateUrl: './course-date-input.component.html',
  styleUrls: ['./course-date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDateInputComponent),
      multi: true
    }]
})
export class CourseDateInputComponent implements ControlValueAccessor {

  value: string;

  private parseDate(value: string): Date {
    const timestamp = Date.parse(value);
    if (isNaN(timestamp)) {
      return null;
    }
    return new Date(timestamp);
  }

  onChange() {
    this.onChangeValue(this.parseDate(this.value));
  }

  registerOnValidatorChange?(fn: () => void): void { }

  onChangeValue: (value: any) => void = () => { };

  onTouched: () => any = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  public constructor() { }

}
