import { ConflictException, ConsoleLogger, Injectable, NotImplementedException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../../../../prisma/prisma.service'
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOne(createUserDto.username);
    if (user){
      throw new ConflictException('User already exists');
    } else{
      return this.prisma.user.create({data:createUserDto});
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(username: string) {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async remove(username: string) {
    const deleteUser = await this.prisma.user.findUnique({ where: { username } });

    if (!deleteUser || deleteUser.username !== username) {
          throw new NotFoundException('User not found');
    }
    return this.prisma.user.delete({
          where: {
            username: username,
          },
    });
  }
}