import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-course-authors-selector',
  templateUrl: './course-authors-selector.component.html',
  styleUrls: ['./course-authors-selector.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CourseAuthorsSelectorComponent),
    multi: true
  }]
})
export class CourseAuthorsSelectorComponent implements ControlValueAccessor {

  value: string;

  @Input()
  options: string[];

  selected: string[] = [];

  public constructor() { }

  changeSelection(option: string) {
    const index = this.selected.indexOf(option);
    if (index !== -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(option);
    }
    this.onChangeValue(this.selected);
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

}
