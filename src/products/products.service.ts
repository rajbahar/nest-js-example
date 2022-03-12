import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rook, BookDocument } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Rook.name) private productModel: Model<BookDocument>,
  ) {}

  async insert(data) {
    const newprod = new this.productModel(data);

    const result = await newprod.save();
    console.log(result);
  }
}
