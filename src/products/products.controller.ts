import { Controller, Post, Body } from '@nestjs/common';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(@Body() data: any): any {
    this.productsService.insert(data);
  }
}
