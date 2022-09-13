import { Injectable, Get, Patch, HttpException, HttpStatus, NotFoundException, ForbiddenException} from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { PrismaService } from '../../../../../prisma/prisma.service'
import { Prisma } from '@prisma/client';


@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.tasks.findMany();
    }

    findOne(authorId: string) {
        console.log(authorId);
        return this.prisma.tasks.findMany({ where: { authorId } });
    }

    async create(TaskDTO: TaskDTO){
        const {authorId, title, status} = TaskDTO;
        const user = await this.prisma.user.findUnique({
            where: {
              username: authorId,
            },
          })
        
        if (user){
            return this.prisma.tasks.create({ data: { authorId, title, status } });
        } else{
            throw new NotFoundException("User doesnot exist, Check the authorId");
        }
    }

    async delete(id: number) {
        const user = await this.prisma.tasks.findUnique({
            where: {
              id: id,
            },
        })

        if (user){
            return this.prisma.tasks.delete({ where: { id } });
        } else{
            throw new NotFoundException("Task doesnot exist");
        }
    }

    async update(taskId: number, UpdateTaskDTO: UpdateTaskDTO){
      const {authorId, title, status} = UpdateTaskDTO;

      const updateTask = await this.prisma.tasks.findUnique({
          where: {
            id: taskId,
          }
        });
    
        if (!updateTask || updateTask.id !== taskId) {
          throw new ForbiddenException(`Task with id ${taskId} not found!`);
        }

        try { 
          return await this.prisma.tasks.update({
          where: {
            id: taskId,
          },
          data: {authorId, title, status},
        });
      } catch{
        throw new NotFoundException('authorId is not correct');
      }
  }
          

}