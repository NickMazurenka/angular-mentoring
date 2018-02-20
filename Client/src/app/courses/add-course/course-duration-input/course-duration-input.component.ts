import { Component, OnInit, Input, forwardRef, ExistingProvider } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, FormControl, ValidationErrors, NG_VALIDATORS
} from '@angular/forms';
import { CourseDurationPipe } from '../../course-details/course-duration.pipe';

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

  private _prev: string;
  value: string;

  private sendFromValueUpdate(): void {
    if (this._prev === this.value) {
      return;
    }
    this._prev = this.value;
    this.onChangeValue(this.value === '' ? null : +this.value);
  }

  onChange() {
    this.sendFromValueUpdate();
  }

  onBlur() {
    this.onTouched();
  }

  onKeyPress(event) {
    const pattern = this.value.length > 0 ? /[0-9]/ : /[1-9]/;
    if (this.value.length > 2) {
      event.preventDefault();
      return;
    }
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return;
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
    this.sendFromValueUpdate();
  }

  onDownClick() {
    const number = +this.value;
    if (number > 0) {
      this.value = (number - 1).toString();
    }
    this.sendFromValueUpdate();
  }

  registerOnValidatorChange?(fn: () => void): void { }

  onChangeValue: (value: any) => void = () => { };

  onTouched: () => any = () => { };

  writeValue(value: number): void {
    this.value = String(value);
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

