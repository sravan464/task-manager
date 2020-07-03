import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getHello(): Object {
    return {
      tasks: {
        taskid: 1234,
        taskTitle: 'Email notification',
      },
    };
  }
}
