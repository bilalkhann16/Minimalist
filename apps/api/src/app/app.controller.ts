import { Controller, Get } from '@nestjs/common';
import { Message } from '@mhsp-minimalist/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  // @Get('hello1')
  // getDataa(): string {
  //   return 'This action returns a string';
  // }
}
