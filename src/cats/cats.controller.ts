import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
