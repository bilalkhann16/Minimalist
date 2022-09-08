import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TaskDTO{
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    status: 'OPEN' | 'PENDING' | 'CLOSED';

    @IsString()
    @IsNotEmpty()
    authorId: string;
}