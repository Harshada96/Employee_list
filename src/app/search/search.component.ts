import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public inputName:string;
  @Output() sendName:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    this.sendName.emit(this.inputName)
  }

}
