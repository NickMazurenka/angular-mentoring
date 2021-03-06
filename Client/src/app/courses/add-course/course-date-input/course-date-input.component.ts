import { Component, OnInit, Input, forwardRef, ExistingProvider } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, FormControl, ValidationErrors, NG_VALIDATORS
} from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DatePipe } from '@angular/common';

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

  locale: string = 'en-US';

  get currentDateFormatted(): string {
    return new DatePipe(this.locale).transform(new Date(), 'yyyy/MM/dd');
  }

  public constructor() { }

  private parseDate(value: string): Date {
    const pattern = /(1|2)\d\d\d(-|\/)\d\d?(-|\/)(0|1|2|3)\d?/;
    if (!pattern.test(value)) {
      return null;
    }
    const timestamp = Date.parse(value);
    if (isNaN(timestamp)) {
      return null;
    }
    return new Date(timestamp);
  }

  private notifyParent() {
    this.onChangeValue(this.parseDate(this.value));
  }

  onChange() {
    this.notifyParent();
  }

  onDoubleClick() {
    this.value = this.currentDateFormatted;
    this.notifyParent();
  }

  onBlur() {
    this.onTouched();
  }

  registerOnValidatorChange?(fn: () => void): void { }

  onChangeValue: (value: any) => void = () => { };

  onTouched: () => any = () => { };

  writeValue(value: Date): void {
    this.value = new DatePipe(this.locale).transform(value, 'yyyy/MM/dd');
  }

  registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
