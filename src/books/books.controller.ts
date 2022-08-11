import { Controller, Body, Post } from '@nestjs/common';
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
}
