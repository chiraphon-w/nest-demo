import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v1 as uuid } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  addTodo(title: string, subtitle: string) {
    console.log(`title: ${title}, subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuid();
    todo.title = title;
    todo.subtitle = subtitle;
    this.todoArray.push(todo); // {id, title, subtitle} >> []
  }

  getTodos() {
    return this.todoArray; //[{id, title, subtitle}, {....}]
  }

  removeTodoById(id: string) {
    const found = this.todoArray.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Todo with ${id} not found`);
    }

    this.todoArray = this.todoArray.filter((item) => {
      return item.id !== id;
    });
    return this.todoArray;
  }
}
