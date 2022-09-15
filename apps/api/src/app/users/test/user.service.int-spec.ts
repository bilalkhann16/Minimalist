import {Test} from '@nestjs/testing';
import {AppModule} from '../../app.module';
import { describe, expect, it, test } from '@jest/globals';
import { PrismaService } from '../../../../../../prisma/prisma.service'
import {UsersService} from '../users.service';



describe('UsersService Int', () => {
    it.todo('should be defined');
});

// describe('UsersController (e2e)', () => {
//     beforeAll(async () => {
//         const moduleRef = await Test.createTestingModule({
//             imports: [AppModule],
//         }).compile();
        
//         const app = moduleRef.createNestApplication();
//         await app.init();

//         describe('findAll()', () => {
            
//     })
// });