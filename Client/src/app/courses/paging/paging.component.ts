import { Component, OnInit, Input, ViewChildren, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChildren('page') pageButtons: ElementRef[];

  @Input()
  totalPages: number;

  currentPage = 1;

  pages: number[];

  ngOnInit() {
    this.pages = Array.from(Array(this.totalPages).keys());
  }

  ngAfterViewInit() {
    console.log(this.pageButtons);
  }

  onButtonClick() {

  }

}
