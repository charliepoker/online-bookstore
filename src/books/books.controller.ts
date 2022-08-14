import { Controller, Body, Post, Get, NotFoundException } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post('/createbook')
  async createBook(@Body() body: CreateBookDto) {
    const book = await this.booksService.createBook(
      body.title,
      body.author,
      body.price,
      body.description,
    );

    return book;
  }

  @Get('/:id')
  async getBooks(id: number) {
    const book = await this.booksService.findOne(id);
    if (!book) {
      throw new NotFoundException('book not found');
    }
    return book;
  }
}
