import { Body, Controller, Post } from '@nestjs/common';
import { CreateBmiDto } from './app.class';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  BmiCalculator(@Body() createBmiDto: CreateBmiDto[]): CreateBmiDto[] {
    return this.appService.calculator(createBmiDto);
  }
}
