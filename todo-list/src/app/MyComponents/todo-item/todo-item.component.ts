import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Input() i : number|any;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoMark: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("triggeres");
  }
  onCheckboxclick(todo:Todo){
    this.todoMark.emit(todo);
    console.log("triggeres");
  }

}
