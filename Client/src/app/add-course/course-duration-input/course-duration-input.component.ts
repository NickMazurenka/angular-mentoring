import { Component, OnInit, Input, forwardRef, ExistingProvider } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, FormControl, ValidationErrors, NG_VALIDATORS
} from '@angular/forms';

@Component({
  selector: 'app-course-duration-input',
  templateUrl: './course-duration-input.component.html',
  styleUrls: ['./course-duration-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CourseDurationInputComponent),
      multi: true
    }]
})
export class CourseDurationInputComponent implements ControlValueAccessor {

  value: string;

  onChange(event) {
    this.onChangeValue(this.value);
  }

  onKeyPress(event) {
    const pattern = this.value.length > 0 ? /[0-9]/ : /[1-9]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onPaste(event) {
    event.preventDefault();
  }

  onDrop(event) {
    event.preventDefault();
  }

  onUpClick() {
    this.value = (+this.value + 1).toString();
  }

  onDownClick() {
    const number = +this.value;
    if (number > 0) {
      this.value = (number - 1).toString();
    }
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

