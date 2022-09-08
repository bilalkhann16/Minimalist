import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, isString } from 'class-validator';

export class UpdateTaskDTO{
    @IsString()
    id?: number;

    @IsString()
    title?: string;
    
    @IsString()
    status: 'OPEN' | 'PENDING' | 'CLOSED';

    @IsString()
    authorId?: string;
}