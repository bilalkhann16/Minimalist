import { Injectable, Get, Patch, HttpException, HttpStatus, NotFoundException} from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { PrismaService } from '../../../../../prisma/prisma.service'
import { Prisma } from '@prisma/client';
import { stringify } from 'querystring';


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


    async updateTaskPrisma(id: number, updateData: { title: string, status: string }) {
        // id = stringify(id);
        const user = await this.prisma.tasks.findUnique({
            where: {
              id: id,
            },
        })

        if (user){
            return this.prisma.tasks.update({
                    where: { id },
                    data: updateData,
            });
        } else{
            throw new NotFoundException("Task doesnot exist");
        }
    }
}
