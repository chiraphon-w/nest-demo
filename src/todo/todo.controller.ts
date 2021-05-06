import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
// import { title } from 'process';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  get() {
    return this.todoService.getTodos();
  }

  @Post()
  postTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    this.todoService.addTodo(title, subtitle);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    console.log(`id: ${id}`);
    return this.todoService.removeTodoById(id);
  }
}
