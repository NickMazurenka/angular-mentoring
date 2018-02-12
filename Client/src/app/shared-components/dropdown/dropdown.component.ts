import {
  Component,
  OnInit,
  ContentChildren,
  forwardRef,
  QueryList,
  Output,
  EventEmitter,
  Input,
  OnDestroy,
  AfterContentInit,
  HostListener,
  Self,
  Optional,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  SelectableOptionComponent,
  SelectableOptionParent,
  SELECTABLE_OPTION_PARENT
} from '../selectable-option/selectable-option.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { ESCAPE, DOWN_ARROW, UP_ARROW, ENTER, SPACE, TAB } from '@angular/cdk/keycodes';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    { provide: SELECTABLE_OPTION_PARENT, useExisting: DropdownComponent }
  ]
})
export class DropdownComponent implements
  OnInit,
  AfterContentInit,
  OnDestroy,
  ControlValueAccessor,
  SelectableOptionParent {

  private _value: any = null;

  private _disabled: boolean = false;

  private _required: boolean = false;

  protected _destroy = new Subject<void>();

  isOpen: boolean = false;

  selectionModel: SelectionModel<SelectableOptionComponent>;

  keyManager: ActiveDescendantKeyManager<SelectableOptionComponent>;

  get selected(): SelectableOptionComponent[] {
    return this.selectionModel.selected;
  }

  get label(): string {
    return `${this.selected.length} Selected`;
  }

  get isEmpty(): boolean {
    return this.selectionModel.isEmpty()
      || this.selected === undefined;
  }

  @Input()
  get value(): any { return this._value; }
  set value(value: any) {
    if (this._value !== value) {
      this.writeValue(value);
      this._value = value;
    }
  }

  @Input() placeholder: string;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }

  @Input()
  get required(): boolean { return this._required; }
  set required(value) {
    this._required = coerceBooleanProperty(value);
  }

  @Output() closed = new EventEmitter<void>();

  @ViewChild('listbox') listbox: ElementRef;

  @ContentChildren(forwardRef(() => SelectableOptionComponent), { descendants: true }) options: QueryList<SelectableOptionComponent>;

  constructor( @Self() @Optional() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  private _handleDropdownKeydown(event: KeyboardEvent): void {
    this.isOpen ? this._handleOpenedDropdownKeydown(event) : this._handleClosedDropdownKeydown(event);
  }

  private _handleOpenedDropdownKeydown(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE) {
      this.close();
    } else if ((event.keyCode === SPACE || event.keyCode === ENTER) && this.keyManager.activeItem) {
      event.preventDefault();
      this.keyManager.activeItem.toggleItem();
    } else {
      this.keyManager.onKeydown(event);
    }
  }

  private _handleClosedDropdownKeydown(event: KeyboardEvent) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      event.preventDefault();
      this.open();
    } else if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
      this.keyManager.onKeydown(event);
    }
  }

  ngOnInit() {
    this.selectionModel = new SelectionModel<SelectableOptionComponent>(true, null, false);
  }

  ngAfterContentInit() {
    this.keyManager = new ActiveDescendantKeyManager<SelectableOptionComponent>(this.options).withTypeAhead();

    this.keyManager.tabOut.pipe(takeUntil(this._destroy)).subscribe(() => this.close());
    this.keyManager.change.pipe(takeUntil(this._destroy)).subscribe(() => {
      if (!this.isOpen && this.keyManager.activeItem) {
        this.keyManager.activeItem.toggleItem();
      }
    });

    Promise.resolve().then(() => {
      this.selectValue(this.ngControl ? this.ngControl.value : this._value);
    });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }

  toggleOption(option: SelectableOptionComponent) {
    this.selectionModel.select(option);

    this.keyManager.setActiveItem(this.options.toArray().indexOf(option));

    this.onChangeValue(option.value);
    this._value = option.value;
  }

  selectValue(value: any) {
    if (this.options) {
      const option = this.options.find(item => item.value === value);

      if (option) {
        this.selectOption(option);
      }
    }
  }

  togle(): void {
    this.isOpen ? this.close() : this.open();
  }

  open(): void {
    // if (this.disabled) {
    //   return;
    // }

    this.isOpen = true;

    // if (this.keyManager) {
    //   if (this.selected) {
    //     this.keyManager.setActiveItem(this._getSelectedIndex());
    //   } else {
    //     this.keyManager.setFirstItemActive();
    //   }
    // }
  }

  close(): void {
    this.isOpen = false;
    this.closed.emit();
  }

  @HostListener('click')
  onClick() {
    this.togle();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.listbox || (this.listbox && this.listbox.nativeElement === event.target)) {
      this._handleDropdownKeydown(event);
    } else if (event.keyCode === ESCAPE || event.keyCode === TAB) {
      setTimeout(() => {
        this.close();
      });
    }
  }

  onChangeValue: (value: any) => void = () => { };

  onTouched: () => any = () => { };

  writeValue(obj: any): void {
    this.selectValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
