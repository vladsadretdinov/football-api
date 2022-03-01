import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() placeholder: string | undefined;
  @Output() searchTextChange = new EventEmitter();

  _searchText: string = "";

  @Input()
  get searchText() {
    return this._searchText;
  }
  set searchText(val: string) {
    this._searchText = val;
    this.searchTextChange.emit(this._searchText);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
