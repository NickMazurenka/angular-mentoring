import {
  Component,
  Input,
  Output,
  HostListener,
  HostBinding,
  EventEmitter,
  ElementRef,
  InjectionToken,
  Optional,
  Inject
} from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

export interface SelectableOptionParent {

  disabled: boolean;

  selected: SelectableOptionComponent[];

  toggleOption(option: SelectableOptionComponent): void;
}

export const SELECTABLE_OPTION_PARENT =
  new InjectionToken<SelectableOptionParent>('SELECTABLE_OPTION_PARENT');

@Component({
  selector: 'app-selectable-option',
  templateUrl: './selectable-option.component.html',
  styleUrls: ['./selectable-option.component.scss']
})
export class SelectableOptionComponent implements Highlightable {

  private _disabled: boolean = false;

  private _placeholder: boolean = false;

  isActive: boolean = false;

  get isSelected(): boolean {
    return this._parent != null && this._parent.selected && this._parent.selected.filter(option => option.value === this.value).length > 0;
  }

  @Input() value: any = null;

  @Input()
  @HostBinding('class.disabled')
  get disabled(): boolean { return this._disabled || (this._parent && this._parent.disabled); }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }

  @HostBinding('attr.tabindex')
  get tabindex(): string {
    return this.disabled ? '-1' : '0';
  }

  @Input()
  get placeholder(): boolean { return this._placeholder; }
  set placeholder(value) {
    this._placeholder = coerceBooleanProperty(value);

    if (this._placeholder) {
      this.value = null;
    }
  }

  @Output() toggle = new EventEmitter<any>();

  constructor(
    private _element: ElementRef,
    @Optional() @Inject(SELECTABLE_OPTION_PARENT) private _parent: SelectableOptionParent) { }

  setActiveStyles(): void {
    if (!this.isActive) {
      this.isActive = true;
    }
  }

  setInactiveStyles(): void {
    if (this.isActive) {
      this.isActive = false;
    }
  }

  getLabel?(): string {
    return (this._element.nativeElement.textContent || '').trim();
  }

  toggleItem(): void {
    if (this._parent) {
      this._parent.toggleOption(this);
    }

    this.toggle.emit(this.value);
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.keyCode === ENTER || event.keyCode === SPACE) {
      this.toggleItem();
      event.preventDefault();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.toggleItem();
  }

}
