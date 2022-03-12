import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Rook, BookSchema } from './product.model';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'Product', schema: Product }]),
    MongooseModule.forFeature([{ name: Rook.name, schema: BookSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
