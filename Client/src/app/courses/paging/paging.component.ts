import { Component, OnInit, Input, ViewChildren, AfterViewInit, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {

  constructor() { }

  private _currentPageValue: string;
  private _previousValue: number;

  @Input()
  totalPages: number;

  @Input()
  get currentPage(): number {
    return +this._currentPageValue;
  }
  set currentPage(value: number) {
    this._currentPageValue = String(value);
  }

  @Output()
  pageChanged = new EventEmitter<number>();

  private updateCurrentPage() {
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    } else if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    if (this.currentPage !== this._previousValue) {
      this._previousValue = this.currentPage;
      this._currentPageValue = String(this.currentPage);
      this.pageChanged.emit(this.currentPage);
    }
  }

  onChange() {
    this.updateCurrentPage();
  }

  onKeyPress(event) {
    const pattern = /\d/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return;
    }
  }

  onKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.updateCurrentPage();
    }
  }

  onPaste(event) {
    event.preventDefault();
  }

  onDrop(event) {
    event.preventDefault();
  }

  onNextClick() {
    this.currentPage++;
    this.updateCurrentPage();
  }

  onPreviousClick() {
    this.currentPage--;
    this.updateCurrentPage();
  }

  onLastClick() {
    this.currentPage = this.totalPages;
    this.updateCurrentPage();
  }

  onFirstClick() {
    this.currentPage = 1;
    this.updateCurrentPage();
  }

}
