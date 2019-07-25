import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} cat`
    }

    @Get()
    finally(): Observable<any[]> {
        return of([])
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat'
    }
}
