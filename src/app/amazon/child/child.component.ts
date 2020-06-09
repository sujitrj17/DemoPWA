
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input('fromParentData') public received;
  @Output() public childEvent =  new EventEmitter();

  ngOnInit() {
  }

  sendEventToparent(){
    this.childEvent.emit('this is message from child');
  }

}
