import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TaskDTO{
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    title: string;
    
    // @IsBoolean()
    // @ApiProperty({ required: true, default: true })
    @IsString()
    @IsNotEmpty()
    status: string;
    // status?: boolean = true;

    @IsString()
    @IsNotEmpty()
    authorId: string;
}