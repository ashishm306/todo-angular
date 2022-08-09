import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string|any ;
  todos:Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos=[];
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }


    //this.todos=[
      // {sno: 1,
      // title: 'This is title',
      // desc: 'this is description',
      // active: true},
      // {sno: 2,
      //   title: 'This is title',
      //   desc: 'this is description',
      //   active: true},
      // {sno: 3,
      //   title: 'This is title 3',
      //   desc: 'this is description 3',
      //   active: true}
    //]
     
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  markTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active ;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
