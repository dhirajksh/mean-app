import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';


export class DropdownValue {
  value:string;
  label:string;

  constructor(value:string,label:string) {
    this.value = value;
    this.label = label;
  }
}


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  values: DropdownValue[];

  @Input()
  value: string[];

  @Output()
/*  valueChange: EventEmitter;

  constructor(private elementRef:ElementRef) {
    this.valueChange = new EventEmitter();
  }

  select(value) {
    this.valueChange.emit(value);
  }
*/
  ngOnInit() {
  }

}


