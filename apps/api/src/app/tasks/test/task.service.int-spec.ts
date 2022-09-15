import {Test} from '@nestjs/testing';
// import { describe, expect, it, test } from '@jest/globals';

import { AppModule } from '../../app.module';
import {PrismaService} from '../../../../../../prisma/prisma.service';
// import { PrismaService } from '../../../../../../prisma/prisma.service'
// import { TasksController } from '../tasks.controller';

describe('TasksService Int', () => {
    let prisma ;PrismaService;
    beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [AppModule],
    }).compile();
    // prisma = moduleRef.get(PrismaService);
    // await prisma.cleanDatabase();
    });


});