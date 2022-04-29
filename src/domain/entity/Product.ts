import { ProductCategory } from './ProductCategory';
import { ProductImage } from './ProductImage';
import InvalidPrice from "../errors/InvalidPrice";

export default class Product {

    constructor(readonly name: string, readonly description: string, readonly code: string, readonly price: number, readonly image: ProductImage, readonly category: ProductCategory) {
        if(price < 0) throw new InvalidPrice();
    }

}