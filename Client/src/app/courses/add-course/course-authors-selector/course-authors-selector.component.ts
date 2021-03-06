import { Component, OnInit, forwardRef, Input, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { IAuthor } from '../../models/author.model';

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

  isOpen: boolean = false;
  selected: IAuthor[] = new Array<IAuthor>();

  @Input()
  authors: IAuthor[];

  public constructor() { }

  changeSelection(option: IAuthor) {
    const index = this.selected.indexOf(option);
    if (index !== -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(option);
    }
    this.onChangeValue(this.selected);
  }

  isOptionSelected(option: IAuthor): boolean {
    return this.selected.indexOf(option) !== -1;
  }

  toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  close() {
    this.isOpen = false;
    this.onTouched();
  }

  open() {
    this.isOpen = true;
  }

  onClick() {
    this.toggle();
  }

  onToggle() {
    this.onTouched();
  }

  registerOnValidatorChange?(fn: () => void): void { }

  onChangeValue: (value: any) => void = () => { };

  onTouched: () => any = () => { };

  writeValue(value: IAuthor[]): void {
    this.selected = value;
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
