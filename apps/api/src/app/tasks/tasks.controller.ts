import { Controller, Get, Post, Patch, Body, Param, Delete } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly TasksService: TasksService) {}

    @Get()
    getTaskPrisma() {
        return this.TasksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return this.TasksService.findOne(id);
    }
    
    @Post()
    create(@Body() postData: TaskDTO) {
        console.log(postData);
        return this.TasksService.create(postData);
    }

    @Delete(':id')
    deteteTaskPrisma(@Param('id') id: string) {
        return this.TasksService.delete(+id);
    }
    
    @Patch(':id')
    updateTaskPrisma(@Param('id') id: string, @Body() updateData: UpdateTaskDTO) {
        return this.TasksService.update(+id, updateData);
    }



}