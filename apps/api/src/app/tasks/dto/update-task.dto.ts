import { IsNotEmpty, IsOptional, IsString, isString } from 'class-validator';

export class UpdateTaskDTO{
    @IsString()
    id?: number;

    @IsString()
    @IsOptional()
    title?: string;
    
    @IsString()
    @IsOptional()
    status?: string;

    @IsString()
    authorId?: string;
}