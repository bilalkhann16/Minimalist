import { Injectable } from '@nestjs/common';
import { Message } from '@mhsp-minimalist/api-interfaces';
import { TaskDTO } from './tasks/dto/task.dto';
// import { mockTasks } from './tasks/tasks-mock';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
