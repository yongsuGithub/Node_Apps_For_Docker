import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue:string="";

  @Output()
  searchEvent:EventEmitter<string>= new EventEmitter();

  constructor() { }

  SearchData(){
    this.searchEvent.emit(this.searchValue);
  }

  ngOnInit() {
  }

}
