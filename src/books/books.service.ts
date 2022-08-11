import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) {}

  createBook(
    title: string,
    author: string,
    price: number,
    description: string,
  ) {
    const book = this.repo.create({ title, author, price, description });

    return this.repo.save(book);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({
      where: {
        id: id,
      },
    });
  }

  find(title: string) {
    return this.repo.find({
      where: {
        title: title,
      },
    });
  }

  //   async update(id: number) {

  //   }
}
