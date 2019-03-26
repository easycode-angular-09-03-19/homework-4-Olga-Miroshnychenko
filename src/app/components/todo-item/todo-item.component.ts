import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  constructor() {
  }
  @Input() item: object;
  @Output() elementDeleted: EventEmitter<any> = new EventEmitter<any>();
  @Output() elementComplete: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.item);
  }
  // Method delete
  delete() {
    this.elementDeleted.emit(this.item);
  }
  // Method complete task
  completeTask() {
    this.elementComplete.emit(this.item);
  }
}

