import { Injectable } from '@nestjs/common';

// import { Product } from './product.model';

@Injectable()
export class ProductsService {
//   products: Product[] = [];

  insert(title: string, desc: string, price: string) {
    // const newpord = new Product(new Date().toString(), title, desc, price);

    // this.products.push(newpord);
  }
}
