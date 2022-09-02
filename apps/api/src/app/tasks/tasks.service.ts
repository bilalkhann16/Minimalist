import { Injectable, Get, Patch } from '@nestjs/common';
import { repl } from '@nestjs/core';
import { TaskDTO } from './task.dto';
// import { mockTasks } from './tasks-mock';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.tasks.findMany();
    }

    findOne(authorId: string) {
        // return `This action returns a #${id} user`;
        console.log(authorId);
        // return this.prisma.tasks.findUnique({ where: { username } });
        return this.prisma.tasks.findMany({ where: { authorId } });
    
    }

    create(TaskDTO: TaskDTO){
        const {authorId, title, status} = TaskDTO;
        return this.prisma.tasks.create({ data: { authorId, title, status } });
    }

    detete(id) {
        id = parseInt(id);
        return this.prisma.tasks.delete({ where: { id } });
    }

    updateTaskPrisma(id, updateData: { title: string, status: string }) {
        id = parseInt(id);
        return this.prisma.tasks.update({
            where: { id },
            data: updateData,
        });
    }

    

}
