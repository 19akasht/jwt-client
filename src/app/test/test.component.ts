import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
 @Input() public parentData: any;
 @Output() childEvent = new EventEmitter();


 fireEvent(){
  this.childEvent.emit('The end is near')
 }
}
