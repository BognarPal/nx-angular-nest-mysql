import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessageInterface } from '@nx-angular-nest-mysql/my-ts-lib';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  async all() {
    return this.messageService.all();
  }

  @Post()
  async create(@Body() body: MessageInterface) {
    this.messageService.create(body);
  }

  @Get(':id')
  async get(
    @Param('id')
    id: number
  )
  {
    return this.messageService.get(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: MessageInterface
  ) {
    return this.messageService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.messageService.delete(id);
  }
}
