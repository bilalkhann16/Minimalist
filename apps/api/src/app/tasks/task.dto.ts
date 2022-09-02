import { ApiProperty } from '@nestjs/swagger';

export class TaskDTO{
    @ApiProperty()
    id?: string;

    @ApiProperty()
    title: string;
    
    @ApiProperty()
    status: string;

    @ApiProperty()
    authorId: string;
}